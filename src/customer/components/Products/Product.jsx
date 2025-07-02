import {useEffect ,useState,useMemo} from 'react'
import {useSearchParams ,useNavigate} from 'react-router-dom'

import ProductCard from './Productcard'

const sortOptions=[
    {name:"Most Popular",value:'popular'},
    {name:"Newest",value:'newest'},
    {name:"Most Popular",value:'priceLowHigh'},
    {name:"Most Popular",value:'priceHighLow'},
];

export default function Product({product}){
    const [searchParams]=useSearchParams();
    const navigate=useNavigate();

    const[selectedCategory ,setSelectedCategory]=useState('All');
    const[selectedSubCategory ,setSelectedsubCategory]=useState('All')
    const[selectedSort ,setSelectedSort]=useState('popular')

    useEffect(()=>{
        const category=searchParams.get('category')||'All';
        const subcategory=searchParams.get('subcategory')||'All';
        const sort=searchParams.get('sort')||'popular';

        setSelectedCategory(category);
        setSelectedsubCategory(subcategory)
        setSelectedSort(sort);
    },[searchParams]);


    const updateQueryParam=(key,value)=>{
        const params=new URLSearchParams(searchParams.toString())
        params.set(key,value)

        if(key==='category'){
            params.set('subcategory','All')
        }
        navigate({search:params.toString()});
    };

    // Assuming you have a 'products' array available in scope
    const categories = useMemo(
        () => ['All', ...new Set(product.map(p => p.category))],
        [product]
    );

    const subcategories = useMemo(
        () => [
            'All',
            ...new Set(
                product
                    .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
                    .map(p => p.subcategory)
            ),
        ],
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

    





    return(
        <></>
    )
}

