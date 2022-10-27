const products = [
    {
      "precio": 1000,
      "id": 0,
      "title": "Correa emoticon",
      "imagen": "https://d3ugyf2ht6aenh.cloudfront.net/stores/068/331/products/251-c4ea07f4867792d75915255658058160-640-01-a301a7dbbaac56bf2e15429947082066-480-0.png"
    },
    {
      "precio": 1200,
      "id": 1,
      "title": "Correa Anana",
      "imagen": "https://d3ugyf2ht6aenh.cloudfront.net/stores/068/331/products/231-52ed1f46a894aad5fd15255655338964-320-01-43a63e40ead6eb4ab415323561265539-480-0.png"
    },
    {
        "precio": 1200,
        "id": 2,
        "title": "Correa Anana",
        "imagen": "https://d3ugyf2ht6aenh.cloudfront.net/stores/068/331/products/231-52ed1f46a894aad5fd15255655338964-320-01-43a63e40ead6eb4ab415323561265539-480-0.png"
      },
      {
        "precio": 1200,
        "id": 3,
        "title": "Correa Anana",
        "imagen": "https://d3ugyf2ht6aenh.cloudfront.net/stores/068/331/products/231-52ed1f46a894aad5fd15255655338964-320-01-43a63e40ead6eb4ab415323561265539-480-0.png"
      },
      {
        "precio": 1200,
        "id": 4,
        "title": "Correa Anana",
        "imagen": "https://d3ugyf2ht6aenh.cloudfront.net/stores/068/331/products/231-52ed1f46a894aad5fd15255655338964-320-01-43a63e40ead6eb4ab415323561265539-480-0.png"
      },
      {
        "precio": 1200,
        "id": 5,
        "title": "Correa Anana",
        "imagen": "https://d3ugyf2ht6aenh.cloudfront.net/stores/068/331/products/231-52ed1f46a894aad5fd15255655338964-320-01-43a63e40ead6eb4ab415323561265539-480-0.png"
      },
      {
        "precio": 1200,
        "id": 6,
        "title": "Correa Anana",
        "imagen": "https://d3ugyf2ht6aenh.cloudfront.net/stores/068/331/products/231-52ed1f46a894aad5fd15255655338964-320-01-43a63e40ead6eb4ab415323561265539-480-0.png"
      },
      {
        "precio": 1200,
        "id": 7,
        "title": "Correa Anana",
        "imagen": "https://d3ugyf2ht6aenh.cloudfront.net/stores/068/331/products/231-52ed1f46a894aad5fd15255655338964-320-01-43a63e40ead6eb4ab415323561265539-480-0.png"
      },
      {
        "precio": 1200,
        "id": 8,
        "title": "Correa Anana",
        "imagen": "https://d3ugyf2ht6aenh.cloudfront.net/stores/068/331/products/231-52ed1f46a894aad5fd15255655338964-320-01-43a63e40ead6eb4ab415323561265539-480-0.png"
      },
      
  ]

  export const getProducts = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(products);
    }, 3000);
  });