export const navigation = {
  pages: [{
    id: 'Home',
    name: 'Home',
    href: '/',}
  ],
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'All Clothing',
          href: '/',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'All Accessories',
          href: '/',
          imageSrc: 'https://i.etsystatic.com/21513599/r/il/e7448c/5963155258/il_794xN.5963155258_gpk6.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', id:"women_top", href:` {women/clothing/tops} `},
            { name: 'Dresses', id:"women_Dresses", href: '#' },
         
            { name: 'Bottom', id: 'women_Bottom' },
 
            { name: 'Jackets', id: 'women_Jackets' },
  
            { name: 'Suit', id: 'women_Suit' },
   
            { name: 'Jumpsuit', id: 'women_Jumpsuit' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', id: 'women_watch' },
            { name: 'Wallets', id: 'women_wallet' },
            { name: 'Bags', id: 'women_bag' },
            { name: 'Sunglasses', id: 'women_sunglasse' },
            { name: 'Hats', id: 'women_hat' },
            { name: 'Belts', id: 'women_belt' },
          ],
        },
        
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'All Clothing',
          id: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'All Accessories',
          id: '#',
          imageSrc: 'https://www.borsheims.com/blog/wp-content/uploads/2022/05/cartier-watch.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', id: 'men_tops' },
             { name: 'Bottom', id: 'men_bottom' },
            { name: 'Activewear', id: 'men_activewear' },
            { name: 'Outwear', id: 'men_outwear' },
        

            
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', id: 'men_watch' },
            { name: 'Wallets', id: 'men_wallet' },
            { name: 'Bags', id: 'men_bag' },
            { name: 'Sunglasses', id: 'men_sunglasse' },
            { name: 'Hats', id: 'men_hat' },
            { name: 'Belts', id: 'men_belt' },
          ],
        },
      
      ],
    },
  ],
  
}