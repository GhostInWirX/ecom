import { useEffect, useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import ProductCard from './Productcard.jsx';
import {
  Container,
  Grid,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  Paper,
  Divider,
  Box,
  Button
} from '@mui/material';
import {
  FilterList as FilterIcon,
  Sort as SortIcon,
  Category as CategoryIcon,
  Widgets as SubcategoryIcon,
  Clear as ClearIcon,
  Star as StarIcon
} from '@mui/icons-material';

const sortOptions = [
  { name: 'Most Popular', value: 'popular', icon: <StarIcon fontSize="small" /> },
  { name: 'Newest', value: 'newest', icon: <SortIcon fontSize="small" /> },
  { name: 'Price: Low to High', value: 'priceLowHigh', icon: <span style={{ transform: 'rotate(90deg)' }}>▲</span> },
  { name: 'Price: High to Low', value: 'priceHighLow', icon: <span style={{ transform: 'rotate(90deg)' }}>▼</span> },
];

export default function Product({ product }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubCategory, setSelectedSubCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState('popular');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const category = searchParams.get('category') || 'All';
    const subcategory = searchParams.get('subcategory') || 'All';
    const sort = searchParams.get('sort') || 'popular';

    setSelectedCategory(category);
    setSelectedSubCategory(subcategory);
    setSelectedSort(sort);
  }, [searchParams]);

  const updateQueryParam = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);

    if (key === 'category') {
      params.set('subcategory', 'All');
    }

    navigate({ search: params.toString() });
  };

  const clearFilters = () => {
    navigate({ search: '' });
    setSelectedCategory('All');
    setSelectedSubCategory('All');
    setSelectedSort('popular');
  };

  const categories = useMemo(
    () => ['All', ...new Set(product.map(p => p.category))],
    [product]
  );

  const subCategories = useMemo(
    () =>
      ['All', ...new Set(
        product
          .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
          .map(p => p.subCategory)
      )],
    [product, selectedCategory]
  );

  const filteredProducts = useMemo(() => {
    let result = product.filter(p => {
      const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchSub = selectedSubCategory === 'All' || p.subCategory === selectedSubCategory;
      return matchCategory && matchSub;
    });

    if (selectedSort === 'newest') {
      result.sort((a, b) => b.id - a.id);
    } else if (selectedSort === 'priceLowHigh') {
      result.sort((a, b) => a.price - b.price);
    } else if (selectedSort === 'priceHighLow') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [product, selectedCategory, selectedSubCategory, selectedSort]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Container maxWidth="xl" className="py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <Typography variant="h4" component="h1" className="font-bold text-gray-900">
            New Arrivals
            <Typography variant="body2" color="text.secondary" className="mt-1">
              {filteredProducts.length} products found
            </Typography>
          </Typography>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button
              variant="outlined"
              startIcon={<ClearIcon />}
              onClick={clearFilters}
              className="hidden sm:flex"
            >
              Clear Filters
            </Button>

            <Button
              variant="outlined"
              startIcon={<FilterIcon />}
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="sm:hidden"
            >
              Filters
            </Button>

            <FormControl variant="outlined" size="small" className="min-w-[180px]">
              <InputLabel id="sort-by-label">Sort By</InputLabel>
              <Select
                labelId="sort-by-label"
                value={selectedSort}
                onChange={(e) => updateQueryParam('sort', e.target.value)}
                label="Sort By"
                className="bg-white"
              >
                {sortOptions.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    <div className="flex items-center gap-2">
                      {option.icon}
                      {option.name}
                    </div>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        {/* Main Content Layout */}
        <Box display="flex" gap={3}>
          {/* Sidebar Filters (Desktop) */}
          <Box
            sx={{
              width: '260px',
              display: { xs: 'none', md: 'block' }
            }}
          >
            <Paper className="p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <Typography variant="h6" className="flex items-center gap-2">
                  <FilterIcon fontSize="small" /> Filters
                </Typography>
                <Button
                  size="small"
                  startIcon={<ClearIcon />}
                  onClick={clearFilters}
                >
                  Clear
                </Button>
              </div>

              <Divider className="my-3" />

              {/* Category */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <CategoryIcon fontSize="small" />
                  <Typography variant="subtitle1" className="font-medium">Category</Typography>
                </div>
                <RadioGroup
                  value={selectedCategory}
                  onChange={(e) => updateQueryParam('category', e.target.value)}
                >
                  {categories.map(cat => (
                    <FormControlLabel
                      key={cat}
                      value={cat}
                      control={<Radio size="small" color="primary" />}
                      label={cat}
                    />
                  ))}
                </RadioGroup>
              </div>

              <Divider className="my-3" />

              {/* Subcategory */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <SubcategoryIcon fontSize="small" />
                  <Typography variant="subtitle1" className="font-medium">Subcategory</Typography>
                </div>
                <RadioGroup
                  value={selectedSubCategory}
                  onChange={(e) => updateQueryParam('subcategory', e.target.value)}
                >
                  {subCategories.map(sub => (
                    <FormControlLabel
                      key={sub}
                      value={sub}
                      control={<Radio size="small" color="primary" />}
                      label={sub}
                    />
                  ))}
                </RadioGroup>
              </div>
            </Paper>
          </Box>

          {/* Product Grid */}
          <Box flexGrow={1}>
            {filteredProducts.length === 0 ? (
              <Box className="flex flex-col items-center justify-center p-12 text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7486/7486747.png"
                  alt="No products found"
                  className="w-32 h-32 mb-4 opacity-70"
                />
                <Typography variant="h6" className="mb-2">No products match your filters</Typography>
                <Typography variant="body1" color="text.secondary" className="mb-4">
                  Try adjusting your filters or clearing them to see more products
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={clearFilters}
                >
                  Clear All Filters
                </Button>
              </Box>
            ) : (
              <Grid container spacing={3}>
                {filteredProducts.map((item, index) => (
                  <Grid item xs={12} sm={6} lg={4} xl={3} key={item.id || index}>
                    <ProductCard product={item} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </Box>
      </Container>
    </div>
  );
}
