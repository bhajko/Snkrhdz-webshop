const INITIAL_STATE = {
  sections: [
    {
      title: "caps",
      imageUrl: "https://i.ibb.co/6ZnZK9t/caps.png",
      id: 1,
      linkUrl: "shop/caps"
    },
    {
      title: "hoodies",
      imageUrl: "https://i.ibb.co/6n1MTSm/hoodies.png",
      id: 2,
      linkUrl: "shop/hoodies"
    },
    {
      title: "tees",
      imageUrl: "https://i.ibb.co/xHQdvYZ/tees.png",
      id: 3,
      linkUrl: "shop/tees"
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/DRdDfnq/womens.png",
      size: "large",
      id: 4,
      linkUrl: "shop/womens"
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/3kWVh08/mens.png",
      size: "large",
      id: 5,
      linkUrl: "shop/mens"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
