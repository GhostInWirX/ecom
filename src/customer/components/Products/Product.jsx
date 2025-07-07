import { useEffect, useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import ProductCard from './Productcard.jsx';

const sortOptions = [
  { name: 'Most Popular', value: 'popular' },
  { name: 'Newest', value: 'newest' },
  { name: 'Price: Low to High', value: 'priceLowHigh' },
  { name: 'Price: High to Low', value: 'priceHighLow' },
];

export default function Product({ product }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubCategory, setSelectedSubCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState('popular');

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
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-6">
        {/* Header + Sort */}
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4'>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>
          <div className='w-full sm:w-auto flex justify-end'>
            <div className="flex items-center gap-2">
              <label htmlFor='sort-by' className='font-medium text-gray-700'>Sort By</label>
              <select
                id='sort-by'
                value={selectedSort}
                onChange={(e) => updateQueryParam('sort', e.target.value)}
                className='border rounded px-2 py-1'
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Filters + Products */}
        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Filters Sidebar */}
          <aside className='w-full lg:w-1/4 bg-white rounded-lg shadow p-6'>
            <h2 className='text-xl font-semibold mb-4'>Filters</h2>

            {/* Category Filter */}
            <div className='mb-6'>
              <h3 className='font-medium mb-2'>Category</h3>
              <div className='flex flex-col gap-3'>
                {categories.map(cat => (
                  <label key={cat} className='inline-flex items-center gap-2 cursor-pointer'>
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      checked={selectedCategory === cat}
                      onChange={() => updateQueryParam('category', cat)}
                      className='accent-indigo-600'
                    />
                    <span className='text-gray-700'>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* SubCategory Filter */}
            <div className='mb-6'>
              <h3 className="font-medium mb-2">SubCategories</h3>
              <div className='flex flex-col gap-2'>
                {subCategories.map(sub => (
                  <label key={sub} className='inline-flex items-center gap-2 cursor-pointer'>
                    <input
                      type="radio"
                      name="subcategory"
                      value={sub}
                      checked={selectedSubCategory === sub}
                      onChange={() => updateQueryParam('subcategory', sub)}
                      className='accent-indigo-600'
                    />
                    <span className='text-gray-700'>{sub}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <section className='flex-1'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
              {filteredProducts.map((item, index) => (
                <ProductCard key={item.id || index} product={item} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
