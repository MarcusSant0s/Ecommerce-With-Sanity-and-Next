 

export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'name',
        title: 'Nome',
        type: 'string',
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name', // Gerar automaticamente o slug a partir do campo 'name'
          maxLength: 90,  // Limitar o comprimento do slug
          slugify: input => input.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, ''), // Personalize a lógica se necessário
        }
      },
      { 
        name: 'discont',
        title: 'Desconto',
        type: 'number',
      },
      { 
        name: 'price',
        title: 'Preço',
        type: 'number',
      },
      { 
        name: 'details',
        title: 'Detalhes',
        type: 'string',
      },
      { 
        name: 'measures',
        title: 'Medidas',
        type: 'string',
      },
      {
        name: 'category',
        title: 'Categoria',
        type: 'reference',
        to: [{type: 'category' }],
      },
      {
        name: 'Quantity',
        title: 'Quantidade',
        type: 'number',
      },
      {
        name: 'bathType',
        title: 'Tipo banho',
        type: 'reference',
        to: [{ type: 'bathType' }],
      },
    {
        name: 'subCategories',
        title: 'Sub Categories',
        type: 'array',
        of: [{ type:'reference', to: { type: 'subCategories' } }],
      }
    ],
   
  } 


  