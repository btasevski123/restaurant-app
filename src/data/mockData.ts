export const locationData = {
    id: 3,
    name: "Carpe Diem Lounge Club",
    logo: "https://qmenustorage.blob.core.windows.net/media-container/restaurant_logo/CD-Logo.jpeg",
    cover: "https://qmenustorage.blob.core.windows.net/media-container/restaurants/CD-Logo.jpeg",
    description: "A blend of cultures, an eclectic food style. Sample Mediterranean & Asian cuisines with Arabian & Morrocan touches. Our artfully prepared food, our decoration together with the glamour at night will transport you and enhance all of your senses. Enjoy an unforgettable experience at the Carpediem official ambassador of Dom Pérignon & awarded as one of the Finest Clubs in the world.",
    active: true,
    created_at: "2024-07-15T14:44:47.164392Z",
    updated_at: "2024-07-15T14:44:47.164413Z",
    category_id: 1,
    catalog_ids: [1],
    phone: 12345,
    email: "example@gmail.com",

  };
  
  export const categoriesData = [
    {
      id: 3,
      name: "SOFT DRINKS",
      logo: "https://cchbcstorage.blob.core.windows.net/media-container/product_category/logo/Soft_Drinks.jpg",
      active: true,
      created_at: "2024-06-17T09:24:29.875084Z",
      updated_at: "2024-06-17T09:24:29.875099Z"
    },
    {
      id: 2,
      name: "SEAFOOD",
      logo: "https://cchbcstorage.blob.core.windows.net/media-container/product_category/logo/Seafood.jpg",
      active: true,
      created_at: "2024-06-17T09:22:00.350409Z",
      updated_at: "2024-06-17T09:24:36.625471Z"
    },
    {
      id: 1,
      name: "GRILL",
      logo: "https://cchbcstorage.blob.core.windows.net/media-container/product_category/logo/Grill_EUH01hl.jpg",
      active: true,
      created_at: "2024-06-11T18:19:45.249722Z",
      updated_at: "2024-06-17T09:24:44.390188Z"
    },
    {
      id: 4,
      name: "BREAKFAST",
      logo: "https://cchbcstorage.blob.core.windows.net/media-container/product_category/logo/Breakfast.jpg",
      active: true,
      created_at: "2024-06-17T09:26:51.856984Z",
      updated_at: "2024-06-17T09:26:51.857000Z"
    },
    {
      id: 5,
      name: "DESSERT",
      logo: "https://cchbcstorage.blob.core.windows.net/media-container/product_category/logo/Dessert_HhcDJZa.jpg",
      active: true,
      created_at: "2024-06-17T09:28:09.609000Z",
      updated_at: "2024-06-17T09:28:59.328980Z"
    }
  ];
  
  export const productsData = [
    {
      id: 2,
      name: "Grilled Chicken Steak",
      description: "Succulent grilled chicken steak, marinated with herbs and spices, served with a side of your choice.",
      price: "23.00",
      logo: "https://cchbcstorage.blob.core.windows.net/media-container/products/logo/Grilled_Chicke.jpg",
      active: true,
      created_at: "2024-06-11T18:32:11.468364Z",
      updated_at: "2024-06-17T11:33:07.245231Z",
      category_id: 1,
      catalog_id: 1
    },
    {
      id: 1,
      name: "File Mignon",
      description: "Tender filet mignon, perfectly seared, topped with sautéed mushrooms in a savory sauce.",
      price: "40.00",
      logo: "https://cchbcstorage.blob.core.windows.net/media-container/products/logo/File_Mignon.jpg",
      active: true,
      created_at: "2024-06-11T18:19:59.293881Z",
      updated_at: "2024-06-17T11:35:05.112354Z",
      category_id: 1,
      catalog_id: 1
    },
    {
      id: 3,
      name: "Ribeye",
      description: "Juicy ribeye steak, perfectly grilled, seasoned with herbs, and served with a side of your choice.",
      price: "30.00",
      logo: "https://cchbcstorage.blob.core.windows.net/media-container/products/logo/Ribeye.jpg",
      active: true,
      created_at: "2024-06-11T18:33:16.426891Z",
      updated_at: "2024-06-17T11:35:59.492899Z",
      category_id: 1,
      catalog_id: 1
    },
    {
      id: 4,
      name: "Coca-Cola Zero 0.25",
      description: "Refreshing Coca-Cola Zero, 0.25L, zero sugar, same great taste.",
      price: "1.00",
      logo: "https://cchbcstorage.blob.core.windows.net/media-container/products/logo/Coke.jpg",
      active: true,
      created_at: "2024-06-17T11:38:53.653482Z",
      updated_at: "2024-06-17T11:38:53.653499Z",
      category_id: 3,
      catalog_id: 1
    },
    {
      id: 5,
      name: "Fanta 0.25",
      description: "Zesty Fanta, 0.25L, bursting with bold orange flavor, perfectly refreshing.",
      price: "1.00",
      logo: null,
      active: true,
      created_at: "2024-06-17T11:42:47.438382Z",
      updated_at: "2024-06-17T11:42:47.438396Z",
      category_id: 3,
      catalog_id: 1
    },
    {
      id: 6,
      name: "Sprite 0.25",
      description: "Crisp Sprite, 0.25L, with a clean, refreshing lemon-lime taste.",
      price: "1.00",
      logo: null,
      active: true,
      created_at: "2024-06-17T11:43:33.406730Z",
      updated_at: "2024-06-17T11:43:33.406742Z",
      category_id: 3,
      catalog_id: 1
    },
    {
      id: 7,
      name: "Fish and Chips",
      description: "Golden fried fish fillets with crispy chips, served with tartar sauce and lemon wedges.",
      price: "5.00",
      logo: null,
      active: true,
      created_at: "2024-06-17T11:43:59.021692Z",
      updated_at: "2024-06-17T11:43:59.021703Z",
      category_id: 2,
      catalog_id: 1
    },
    {
      id: 8,
      name: "Scalops",
      description: "Pan-seared scallops, perfectly cooked, served with a delicate garlic butter sauce.",
      price: "9.00",
      logo: null,
      active: true,
      created_at: "2024-06-17T11:44:26.058539Z",
      updated_at: "2024-06-17T11:44:26.058555Z",
      category_id: 2,
      catalog_id: 1
    },
    {
      id: 9,
      name: "Shrimp Cocktail",
      description: "Chilled shrimp served with zesty cocktail sauce and a lemon wedge.",
      price: "8.00",
      logo: null,
      active: true,
      created_at: "2024-06-17T11:44:58.217297Z",
      updated_at: "2024-06-17T11:44:58.217312Z",
      category_id: 2,
      catalog_id: 1
    },
    {
      id: 10,
      name: "English Breakfast",
      description: "Hearty English breakfast with eggs, bacon, sausage, baked beans, tomatoes, mushrooms, and toast.",
      price: "6.00",
      logo: null,
      active: true,
      created_at: "2024-06-17T11:46:31.371787Z",
      updated_at: "2024-06-17T11:46:31.371800Z",
      category_id: 4,
      catalog_id: 1
    },
    {
      id: 11,
      name: "Scrambled Eggs",
      description: "Fluffy scrambled eggs, seasoned to perfection, served with your choice of toast or side.",
      price: "6.00",
      logo: null,
      active: true,
      created_at: "2024-06-17T11:47:07.141759Z",
      updated_at: "2024-06-17T11:47:07.141774Z",
      category_id: 4,
      catalog_id: 1
    },
    {
      id: 12,
      name: "Chocolate Lava Cake",
      description: "Decadent chocolate cake with a warm, gooey center, served with a scoop of vanilla ice cream.",
      price: "4.00",
      logo: null,
      active: true,
      created_at: "2024-06-17T11:48:22.910697Z",
      updated_at: "2024-06-17T11:48:22.910710Z",
      category_id: 5,
      catalog_id: 1
    },
    {
      id: 13,
      name: "Classic Tiramisu",
      description: "Layered Italian dessert with espresso-soaked ladyfingers, mascarpone cheese, and a dusting of cocoa powder.",
      price: "3.00",
      logo: null,
      active: true,
      created_at: "2024-06-17T11:48:49.369213Z",
      updated_at: "2024-06-17T11:48:49.369227Z",
      category_id: 5,
      catalog_id: 1
    }
  ];
  