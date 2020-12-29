import React from 'react'
const data = [
    {
      id: 1,
      fullname: "Ha Ngoc Kien",
      image:
        "https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/79451546_3058864351005230_4509966735998189568_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=BVKeMnoM84YAX9axhDn&_nc_ht=scontent.fvca1-1.fna&oh=4bd8cbd3991d8830a0d8f6bf5b3e8fa5&oe=600E8EBA",
    },
    { id: 2 },
    // { id: 3 },
    // { id: 4 },
    // { id: 5 },
  ];
const userReducer = (state=data,action) => {
    switch (action.type) {
        case 'ADD_USER':
            
            break;
    
        default:
           return state
    }
}

export default userReducer
