const vendors = [
  {
    id: 'eaq-restaurant',
    name: 'EAQ Restaurant',
    location: 'Mahallah EAQ, Block Q',
    openHours: '7:00 am - 10:00 pm',
    isOpen: true,
    menu: [
      {
        id: 'eaq-1',
        name: 'Nasi Lemak Ayam',
        description: 'Nasi Lemak with fried chicken and sambal',
        price: 7.5,
        category: 'Rice',
        available: true,
      },
      {
        id: 'eaq-2',
        name: 'Mee Goreng',
        description: 'Fried noodles with vegetables and meat',
        price: 6,
        category: 'Noodles',
        available: true,
      },
      {
        id: 'eaq-3',
        name: 'Teh Tarik',
        description: 'Pulled tea with milk and sugar',
        price: 2.5,
        category: 'Drinks',
        available: false,
      },
    ],
  },
  {
    id: 'kafe-aminah',
    name: 'Kafe Mahallah Aminah',
    location: 'Mahallah Aminah, Ground Floor',
    openHours: '8:00 am - 9:00 pm',
    isOpen: true,
    menu: [
      {
        id: 'ami-1',
        name: 'Nasi Ayam Penyet',
        description: 'Smashed fried chicken with sambal and rice',
        price: 9,
        category: 'Rice',
        available: true,
      },
      {
        id: 'ami-2',
        name: 'Air Bandung',
        description: 'Rose syrup with milk',
        price: 3,
        category: 'Drinks',
        available: true,
      },
    ],
  },
];

export default vendors;