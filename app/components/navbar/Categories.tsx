'use client'

import { TbBeach, TbShovel,  } from 'react-icons/tb';
import {  GiHomeGarage, } from 'react-icons/gi';
import { MdHomeWork, MdOutlineBedroomParent, MdOutlineVilla, MdOutlineWarehouse } from 'react-icons/md';
import { PiBuildings, PiOfficeChair } from 'react-icons/pi';
import {LiaTractorSolid  } from 'react-icons/lia';

import { usePathname, useSearchParams } from 'next/navigation';
import { BiStore } from "react-icons/bi";
import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
    {
        label: 'Apartament',
        icon: PiBuildings ,
        description: 'Kjo prone eshte ne modalitetin Apartament!'
    },

    {
        label: 'Vile',
        icon: MdOutlineVilla ,
        description: 'Kjo prone eshte nje Vile!'
    },

    {
        label: 'Magazine',
        icon: MdOutlineWarehouse ,
        description: 'Kjo prone eshte Magazine!'
    },

    {
        label: 'Garzionere',
        icon: MdOutlineBedroomParent ,
        description: 'Kjo prone eshte garsionere.!'
    },
    {
        label: 'Duplex',
        icon: MdHomeWork ,
        description: 'Kjo prone eshte e modalitetit duplex!'
    },
    {
        label: 'Parking',
        icon: GiHomeGarage ,
        description: 'Ky eshte nje parking!'
    },
    {
        label: 'Biznes',
        icon: BiStore ,
        description: 'Kjo prone eshte biznes aktual!'
    },
    {
        label: 'Truall',
        icon: TbShovel ,
        description: 'Kjo eshte nje truall!'
    },
    {
        label: 'Zyre',
        icon: PiOfficeChair ,
        description: 'Kjo prone eshte zyre!'
    },
    {
        label: 'Shtepi pushimi',
        icon: TbBeach,
        description: 'Kjo prone funksionon si hstepi pushimi!'
    },
    
    {
        label: 'Toke Buqesore',
        icon: LiaTractorSolid,
        description: 'Kjo eshte nje toka per mbjellje!'
    },
    
    
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();
    const isMainPage = pathname === '/';
  
    if (!isMainPage) {
      return null;
    }
  
    return (
      <Container>
        <div
          className="
            pt-4
            flex 
            flex-row 
            items-center 
            justify-between
            overflow-x-auto
          "
        >
          {categories.map((item) => (
            <CategoryBox 
              key={item.label}
              label={item.label}
              icon={item.icon}
              selected={category === item.label}
            />
          ))}
        </div>
      </Container>
    );
  }
   
  export default Categories;