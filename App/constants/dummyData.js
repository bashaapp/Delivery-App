import {icons,images} from '.';


const myProfile = {
    name: "ByProgrammers",
    //profile_image: require("../assets/images/profile.png"),
    address: "No. 88, Jln Padungan, Kuching"
}

const categories = [
    {
        id: 1,
        name: "Western",
        icon: icons.western,
        photo: images.background_1,

    },
    {
        id: 2,
        name: "Burgers",
        icon: icons.burger,
        photo: images.background_2,

    },
    {
        id: 3,
        name: "Grills",
        icon: icons.grill,
        photo: images.background_3,

    },
   
     
    {
        id: 4,
        name: "Special",
        icon: icons.julios_special,
        photo: images.background_4,

    },
    {
        id: 5,
        name: "Sandwiche",
        icon: icons.sandwish,
        photo: images.background_5,

    },
    {
        id: 6,
        name: "Pizza",
        icon: icons.pizza,
        photo: images.background_6,

    },
    {
        id: 7,
        name: "Crep",
        icon: icons.crep,
        photo: images.background_7,

    },
    {
        id: 8,
        name: "Salad",
        icon: icons.salad,
        photo: images.background_8,

    },
      
    {
        id: 9,
        name: "Beverage",
        icon: icons.beverage,
        photo: images.background_9,


    }
]

const recommanded = [
    {
        id: 1,
        name: "Julio's Pizza",
        photo: images.Julios_Pizza,
        price: 20.00,
        rating:3,
        reviews:89
    },
    {
        id: 2,
        name: "Grill Chicken",
        photo: images.Grill_Chicken,
        price: 22.00,
        rating:4,
        reviews:99
    },
    {
        id: 3,
        name: "Super Pancke",
        photo: images.Super_Pancke,
        price: 25.00,
        rating:5,
        reviews:120
    },
    {
        id: 4,
        name: "Tabbolah",
        photo: images.Tabbolah,
        price: 18.00,
        rating:4,
        reviews:101
    },
    {
        id: 5,
        name: "Turkish Kabab",
        photo: images.Turkish_Kabab,
        price: 27.00,
        rating:5,
        reviews:107
    }
]


const favourite = [

    {
        id: 1,
        name: "Cream Cup",
        photo: images.popular_1,
        price:13.00,
        rating:4,
        reviews:90
    },

    {
        id: 2,
        name: "Mic Chocolate",
        photo: images.popular_2,
        price:14.00,
        rating:3,
        reviews:89
    },
    {
        id: 3,
        name: "Mix Juice",
        photo: images.popular_3,
        price:15.00,
        rating:5,
        reviews:89
    },

    {
        id: 4,
        name: "Watermelon",
        photo: images.popular_4,
        price:18.00,
        rating:4,
        reviews:89
    },
]

const offers = [
    {
        id: 1,
        offer:'RM2.70 Off on',
        image: images.offer_1,
        description: "Crepe Roll Stuffed with Banana and Cream Pastry Cream",

        
    },

    {
        id: 2,
        offer:'RM3.50 Off on',
        image: images.offer_2,
        description: "Fried Tender Chicken,Spicy Sauce,Mozzarella Cheese,Corn",

        
    },
    {
        id: 3,
        offer:'RM2.50 Off on',
        image: images.offer_3,
        description: "Mix Banana,Strawberry,Mocktail and Watermelon",
    },
]







export const restaurantMenu = [
    {
        id: 1,
        name: "Western",
        rating: 4.8,
        categories: [1],
        icon: icons.western,
        photo: images.background_1,
        price: 20.00,

        menu:[
            {
               id: 1,
                name: "Chicken Fajita",
                photo: images.Chicken_Fajita,
                description: "Grilled Chicken Breast, Onion, Bell Pepper, Fajita Sauce",
                price: 20.00,
                rating:3,
                reviews:89
            },
            {
               id: 2,
                name: "Cordon Bleu",
                photo: images.Cordon_Bleu,
                description: "Panne Fried Chicken Breast Stuffed with Mozzarella Cheese, Mushroom and Smoked Turkey",
                price: 21.00,
                rating:4,
                reviews:90
            },
            {
               id: 3,
                name: "Crispy Chicken",
                photo: images.Crispy_Chicken,
                description: "Fried Tender Crispy Chicken, Cocktail Sauce, Pasta Salad, Mayonnaise and French Fries",
                price: 19.00,
                rating:4,
                reviews:90
            },
            {
               id: 4,
                name: "Crunchy Chicken",
                photo: images.Crunchy_Chicken,
                description: "Fried Chicken Breast, Béchamel Sauce, Mixed Pepperoni, Cheddar Cheese Slice, Oregano and French Fries",
                price: 19.00,
                rating:5,
                reviews:99
            },
            {
               id: 5,
                name: "Crunchy Spicy",
                photo: images.Crunchy_Spicy,
                description: "Fried Chicken Breasts Pieces Topped with Spicy Sauce and Melted Mozzarella, Corn and Jalapeño,",
                price: 20.00,
                rating:4,
                reviews:95
            },
            {
               id: 6,
                name: "Escalope",
                photo: images.Escalope,
                description: "Fillet Fried Chicken, Mayonnaise, Cocktail Sauce, and French Fries",
                price: 17.00,
                rating:3,
                reviews:89
            },
            {
               id: 7,
                name: "Escalope Milanese",
                photo: images.Escalope_Milanese,
                description: "Fried Tender Chicken Panne, Tomato Sauce, Mushroom, Mozzarella Cheese, Oregano, Mayonnaise",
                price: 20.00,
                rating:4,
                reviews:97
            },
            {
               id: 8,
                name: "Fish Chips",
                photo: images.Fish_Chips,
                description: "Fried Fish Fillet, Tartar Sauce, French Fries, and Cocktail Sauce",
                price: 23.00,
                rating:5,
                reviews:99
            },
            {
               id: 9,
                name: "Francesco Chicken",
                photo: images.Francesco_Chicken,
                description: "Grilled Chicken Breast, Mushroom, Olive, Tomato Sauce, Mozzarella Cheese, and French Fries",
                price: 22.00,
                rating:3,
                reviews:90
            },
            {
               id: 10,
                name: "Philadelphia",
                photo: images.Philadelphia_Beef,
                description: "Beef Slices, Onion, Bell Pepper, Mushroom, Corn, Philadelphia Sauce, Mozzarella Cheese and French Fries",
                price: 23.00,
                rating:4,
                reviews:95
            },
            {
               id: 11,
                name: "Shish_Clay",
                photo: images.Shish_Clay,
                description: "Shish Tawook Pieces, Béchamel Sauce, Cooking Cream, Mushroom, Corn, Bell Peppers, Mustard",
                price: 24.00,
                rating:3,
                reviews:90
            }
        ]
    },
    {
        id: 2,
        name: "Burgers",
        rating: 4.5,
        categories: [2],
        icon: icons.burger,
        photo: images.background_2,
        price: 10.00,
        menu:[
            {
               id: 12,
                name: "Beef Burger",
                photo: images.Beef_Burger,
                description: "Fresh Beef Patty, Lettuce, Mayonnaise Topped with Cheddar Cheese",
                price: 15.00,
                rating:3,
                reviews:89
            },
            {
               id: 13,
                name: "Chicken Burger",
                photo: images.Chicken_Burger,
                description: "Fresh Chicken Burger Patty, Lettuce, Garlic Sauce, Cocktail Sauce,",
                price: 15.00,
                rating:3,
                reviews:89
            },
            {
               id: 14,
                name: "Prime Burger",
                photo: images.Prime_Burger,
                description: "Fresh Beef Patty Stuffed with Cheese and Mushroom, Parsley, topped with Cheddar Cheese",
                price: 18.00,
                rating:4,
                reviews:95
            },
            {
               id: 15,
                name: "Swiss Burger",
                photo: images.Swiss_Burger,
                description: "Fresh Beef Patty, Grilled Mushroom and Onion, Mayonnaise, Lettuce, BBQ Sauce, Topped with Cheddar Cheese",
                price: 17.00,
                rating:4,
                reviews:99
            }
        ]
    },
    {
        id: 3,
        name: "Grills",
        rating: 4.8,
        categories: [3],
        icon: icons.grill,
        photo: images.background_3,
        price: 17.00,
        menu: [
            {
               id: 16,
                name: "Aleppo Kebab",
                photo: images.Aleppo_Kebab,
                description: "Two Grilled Aleppo Kebab Sticks, Tomato and Spicy Sauce, Grilled Chili Pepper, Grilled Onion and French Fries",
                price: 22.00,
                rating:4,
                reviews:95
            },
            {
               id: 17,
                name: "Beef Chunks",
                photo: images.Beef_Chunks,
                description: "Grilled Beef Chunks, BBQ Salad, Grilled Onion, Pepper Sauce & Garlic Sauce Bread and French Fries",
                price: 23.00,
                rating:4,
                reviews:99
            },
            {
               id: 18,
                name: "Beef Kebab",
                photo: images.Beef_Kebab,
                description: "Two Grilled Beef Kebab Sticks, BBQ Salad, Pepper Sauce & Garlic Sauce Bread, Grilled Onion and Tomato and French Fries",
                price: 24.00,
                rating:3,
                reviews:95
            },
            {
               id: 19,
                name: "Chicken Kebab",
                photo: images.Chicken_Kebab,
                description: "Two Grilled Chicken Kebab Sticks, BBQ Salad, Pepper Sauce & Garlic Sauce Bread, Grilled Onion and Tomato and French Fries",
                price: 20.00,
                rating:3,
                reviews:89
            },
            {
               id: 20,
                name: "Grilled Chicken",
                photo: images.Grilled_Chicken,
                description: "Comes with BBQ Salad, Pepper Sauce & Garlic Sauce Bread and French Fries",
                price: 22.00,
                rating:3,
                reviews:87
            },
            {
               id: 21,
                name: "Mixed Grills",
                photo: images.Mix_Grills,
                description: "Whole Grilled Chicken, Comes with BBQ Salad, Pepper Sauce & Garlic Sauce Bread and French Fries",
                price: 44.00,
                rating:4,
                reviews:90
            },
            {
               id: 22,
                name: "Portogalia Beef",
                photo: images.Portogalia_Beef,
                description: "Grilled Beef Patty Stuffed with Mozzarella Cheese & Mushroom & Parsley, Topped with Teriyaki Sauce",
                price: 27.00,
                rating:4,
                reviews:90
            },
            {
               id: 23,
                name: "Shish Tawook",
                photo: images.Shish_Tawook,
                description: "Grilled Shish Tawook, BBQ Salad, Pepper Sauce & Garlic Sauce Bread, Grilled Onion and French Fries",
                price: 18.00,
                rating:4,
                reviews:90
            },
            {
               id: 24,
                name: "Turkish Kebab",
                photo: images.Turkish_Kebab,
                description: "Grilled Eggplant Pieces with Chili Tomato Sauce, BBQ Salad, Pomegranate Molasses, Grilled Onion and Chili Pepper",
                price: 22.00,
                rating:3,
                reviews:89
            }
        ]
    },
    {
        id: 4,
        name: "Special",
        rating: 4.8,
        categories: [4],
        icon: icons.julios_special,
        photo: images.background_4,
        price: 17.00,
        menu: [
            {
               id: 25,
                name: "Shrimp",
                photo: images.Shrimp,
                description: "Fresh shrim, sushi rice, fresh juicy avocado and chilli souce",
                price: 22.00,
                rating:3,
                reviews:89
            },
            {
               id: 26,
                name: "El Paso Fish",
                photo: images.El_Paso_Fish,
                description: "Fresh fish, sushi rice, fresh juicy avocado and chilli souce",
                price: 20.00,
                rating:3,
                reviews:85
            },
            {
               id: 27,
                name: "Indian Kebab",
                photo: images.Indian_Kebab,
                description: "Minced Kebab Beef and Indian Kebab Sauce, Grilled in Oven",
                price: 19.00,
                rating:3,
                reviews:84
            },
            {
               id: 28,
                name: "Oven Beef",
                photo: images.Oven_Beef,
                description: "Minced Beef with Onion, Oriental Spices, Topped with Cooked Tomato Slices",
                price: 23.00,
                rating:3,
                reviews:87
            },
            {
               id: 29,
                name: "Oven Yoghurt",
                photo: images.Oven_Yoghurt,
                description: "Minced Beef with Onion, Oriental Spices, Topped with Yogurt & Tahini Sauce",
                price: 22.00,
                rating:4,
                reviews:95
            },
            {
               id: 30,
                name: "Shawerma",
                photo: images.Shawerma,
                description: "Shawerma Chicken Plate Pieces, Pickles, Pomegranate Molasses, French Fries and Garlic Sauce",
                price: 17.00,
                rating:5,
                reviews:99
            },
            {
               id: 31,
                name: "Shawerma Beef Plate",
                photo: images.Shawerma_Beef_Plate,
                description: "Shawerma Beef Plate Pieces, Pickles, BBQ Salad, Pomegranate Molasses, French Fries and Garlic Sauce",
                price: 20.00,
                rating:3,
                reviews:89
            },
            {
               id: 32,
                name: "Slices Lemon",
                photo: images.Slices_Lemon,
                description: "Grilled Chicken Slices, Garlic, Lemon, Mushroom, Bell Peppers, served with White Rice or French Fries",
                price: 18.00,
                rating:3,
                reviews:90
            },
            {
               id: 33,
                name: "Slices Mushroom",
                photo: images.Slices_Mushroom,
                description: "Grilled Chicken Slices, Corn, Mushroom, Lemon, Cooking Cream and Parmesan Cheese",
                price: 23.00,
                rating:3,
                reviews:84
            },
            
        ]
    },
    {
        id: 5,
        name: "Sandwishes",
        rating: 4.6,
        categories: [5],
        icon: icons.sandwish,
        photo: images.background_5,
        price: 17.00,
        menu: [
            {
               id: 34,
                name: "Beef Kebab ",
                photo: images.Beef_Kebab_Sandwish,
                description: "Shawerma Chicken, Garlic Sauce, Pickles, Pomegranate Molasses, and French Fries",
                price: 9.00,
                rating:3,
                reviews:90
            },
            {
               id: 35,
                name: "Chicken Escalope",
                photo: images.Chicken_Escalope,
                description: "Fried Tender Chicken Panne, Mayonnaise, Cocktail Sauce, Lettuce, Topped with Cheddar Cheese, French Fries",
                price: 19.00,
                rating:4,
                reviews:93
            },
            {
               id: 36,
                name: "Chicken Kebab",
                photo: images.Chicken_Kebab_Sandwish,
                description: "BBQ Salad, Garlic Sauce, Chicken Kebab Stick, Pomegranate Molasses, and French Fries",
                price: 10.00,
                rating:3,
                reviews:85
            },
            {
               id: 37,
                name: "Chicken Roll",
                photo: images.Chicken_Roll,
                description: "Chicken Roll Stuffed with Mozzarella and Cheddar cheese, Shrimp, Mushroom, and Mustard",
                price: 18.00,
                rating:4,
                reviews:90

            },
            {
               id: 38,
                name: "Chunks Beef",
                photo: images.Chunks_Beef,
                description: "BBQ Salad, Chunks Beef, Garlic Sauce, Pomegranate Molasses, and French Fries",
                price: 15.00,
                rating:3,
                reviews:84

            },
            {
               id: 39,
                name: "Crispy Chicken",
                photo: images.Crispy_Chicken_Sandwish,
                description: "Fried Crispy Tender Chicken, Cocktail Sauce, Mayonnaise, Lettuce, Topped with Cheddar Cheese, and French Fries",
                price: 18.00,
                rating:3,
                reviews:86

            },

            {
               id: 40,
                name: "Francesco",
                photo: images.Francesco_Sandwish,
                description: "Tender Chicken Slices, Mozzarella Cheese, Olives, Mushroom, Soya Sauce, and Oregano.",
                price: 16.00,
                rating:3,
                reviews:89

            },
            {
               id: 41,
                name: "Philadelphia ",
                photo: images.Philadelphia_Sandwish,
                description: "Beef Slices, Bell Peppers, Mayonnaise, Mushroom, Philadelphia Sauce, Corn, Onion, Mozzarella Cheese",
                price: 20.00,
                rating:3,
                reviews:88

            },
            {
               id: 42,
                name: "Shawerma Beef",
                photo: images.Shawerma_Beef,
                description: "Beef Slices, BBQ Salad, Yogurt & Tahini, Pickles, Pomegranate Molasses and French Fries",
                price: 15.00,
                rating:3,
                reviews:81

            },

        ]
    },
    {

        id: 6,
        name: "Pizza",
        rating: 4.7,
        categories: [6],
        icon: icons.pizza,
        photo: images.background_6,
        price: 17.00,
        menu: [
            {
               id: 43,
                name: "Calzone Pizza",
                photo: images.Calzone_Pizza,
                description: "Wrapped Pizza Dough, Pizza Sauce, Mozzarella Cheese, Bell Peppers, Mixed Pepperoni, Corn, Oregano",
                price: 20.00,
                rating:3,
                reviews:89
            
            },
            {
               id: 44,
                name: "Chicken Pizza",
                photo: images.Chicken_Pizza,
                description: "Pizza Sauce, Mozzarella Cheese, Grilled Chicken Breast, Bell Peppers, and Oregano",
                price: 18.00,
                rating:3,
                reviews:84
            },
            {
               id: 45,
                name: "Four Seasons",
                photo: images.Four_Seasons,
                description: "Pizza Sauce, Mozzarella Cheese, Olives, Mushroom, Corn, Bell Peppers, Cherry Tomato, Basil, Oregano",
                price: 19.00,
                rating:3,
                reviews:81
            },
            {
               id: 46,
                name: "Julios Pizza",
                photo: images.Julio_s_Pizza,
                description: "Pizza Sauce, Mozzarella Cheese, Bell Peppers, Corn, Olive, Mushroom, Mixed Pepperoni, and Cherry Tomato",
                price: 20.00,
                rating:3,
                reviews:89
            },
            {
               id: 47,
                name: "Margherita Pizza",
                photo: images.Margherita_Pizza,
                description: "Pizza Sauce, Mozzarella Cheese, Basil and Oregano",
                price: 18.00,
                rating:3,
                reviews:84
            },
            {
               id: 48,
                name: "Shrimp Pizza",
                photo: images.Shrimp_Pizza,
                description: "Pizza sauce, mozzarella cheese, shrimp, bell peppers, onions, parsley, and tomato",
                price: 22.00,
                rating:3,
                reviews:88
            }
        ]

    },
    {

        id: 7,
        name: "Crep",
        rating: 4.8,
        categories: [7],
        icon: icons.crep,
        photo: images.background_7,
        price: 17.00,
        menu: [
            {
               id: 49,
                name: "Banana Pancake",
                photo: images.Banana_Pancake,
                description: "5 Pancakes Stuffed with a Full Banana and a Shot Milk Belgium Chocolate",
                price: 21.00,
                rating:4,
                reviews:90
            
            },

            {
               id: 50,
                name: "Blueberry Pancake",
                photo: images.Blueberry_Pancake,
                description: "5 Pancakes Stuffed with Blueberry Jam and a Shot of Milk Belgium Chocolate",
                price: 22.00,
                rating:4,
                reviews:90
            
            },

            {
               id: 51,
                name: "Brownies Crepe",
                photo: images.Brownies_Crepe,
                description: "Stuffed Crêpe with Brownies and Nuts, Coated with Triple Belgium Chocolate.",
                price: 24.00,
                rating:3,
                reviews:91
            
            },

            {
               id: 52,
                name: "Caramel Cake",
                photo: images.Caramel_Cake,
                description: "Crêpe Stuffed with Caramel Sauce, Coated with Milk & White Belgium Chocolate and Caramel",
                price: 20.00,
                rating:4,
                reviews:95
            
            },

            {
               id: 53,
                name: "Caramel Crepe",
                photo: images.Caramel_Crepe,
                description: "Caramel Chocolate, Lotus Biscoff Biscuit Spread, Special Cream Coated with Triple Belgium Chocolate",
                price: 25.00,
                rating:3,
                reviews:87
            
            },

            {
               id: 54,
                name: "Banana Pancake",
                photo: images.Banana_Pancake,
                description: "5 Pancakes Stuffed with a Full Banana and a Shot Milk Belgium Chocolate",
                price: 16.00,
                rating:3,
                reviews:85
            
            },

            {
               id: 55,
                name: "Crepe Cookies",
                photo: images.Crepe_Cookies,
                description: "Crêpe Roll Stuffed with Chantilly Cream, Chocolate Cookies. Coated with Triple Belgium Chocolate",
                price: 24.00,
                rating:3,
                reviews:84
            
            },
            {
               id: 56,
                name: "Crepe Suzette",
                photo: images.Crepe_Suzette,
                description: "Crêpe Roll Stuffed with Banana and Cream Pastry Cream, Coated with Triple Belgium Chocolate",
                price: 22.00,
                rating:3,
                reviews:80
            
            },

            {
               id: 57,
                name: "Mix Pancake",
                photo: images.Mix_Pancake,
                description: "Crêpe Roll Stuffed with a Full Banana, Coated with Triple Belgium Chocolate",
                price: 21.00,
                rating:4,
                reviews:95
            
            },

        ]
    },
    {

        id: 8,
        name: "Salad",
        rating: 4.5,
        categories: [8],
        icon: icons.salad,
        photo: images.background_8,
        price: 17.00,
        menu: [
            {
               id: 58,
                name: "Ceasar Salad",
                photo: images.Ceasar_Salad,
                description: "Lettuce, Toast, Grilled Breast Chicken, Corn, Olives, Parmesan Cheese, and Caesar Sauce",
                price: 14.00,
                rating:3,
                reviews:89
            
            },
            {
               id: 59,
                name: "Fattoush",
                photo: images.Fattoush,
                description: "Tomatoes, Cucumbers, Olives, Lettuce, Vinegar, Olive Oil, Pomegranate Molasses, and Fried Bread",
                price: 15.00,
                rating:3,
                reviews:88
            
            },
            {
               id: 60,
                name: "Greek Salad",
                photo: images.Greek_Salad,
                description: "Tomatoes, Lettuce, Olives, Bell Peppers, Cucumbers, Feta Double Cream Cheese, and Vinegar",
                price: 14.00,
                rating:4,
                reviews:89
            
            },
            {
               id: 61,
                name: "Green Salad",
                photo: images.Green_Salad,
                description: "Tomatoes, Cucumbers, Lettuce, Bell Peppers, Olives, Corn, Lemon, and Olive Oil",
                price: 11.00,
                rating:3,
                reviews:83
            
            },
            {
               id: 62,
                name: "Julios Salad",
                photo: images.Julio_s_Salad,
                description: "Tomatoes, Bell Peppers, Corn, Lettuce, Mozzarella Cheese, Mixed Cold Cuts and Dressing Sauce",
                price: 12.00,
                rating:4,
                reviews:90
            
            },
            {
               id: 63,
                name: "Pasta Salad",
                photo: images.Pasta_Salad,
                description: "Fusilli Pasta, Bell Peppers, Corn, Mixed Cold Cuts, Lettuce, Olives, and Dressing Sauce",
                price: 13.00,
                rating:4,
                reviews:93
            
            },
        ]
    },
    {

        id: 9,
        name: "Beverage",
        rating: 4.8,
        categories: [9],
        icon: icons.beverage,
        photo: images.background_9,
        price: 17.00,
        menu: [
            {
               id: 64,
                name: "Avocado",
                photo: images.avocado,
                price: 12.00,
                rating:3,
                reviews:80
            
            },
            {
               id: 65,
                name: "Ice Lemon Tea",
                photo: images.ice_lemon_tea,
                price: 4.00,
                rating:4,
                reviews:96
            
            },
            {
               id: 66,
                name: "Kiwi",
                photo: images.kiwi,
                price: 11.00,
                rating:4,
                reviews:90
            
            },
            {
               id: 67,
                name: "Lemon",
                photo: images.lemon,
                price: 10.00,
                rating:3,
                reviews:85
            
            },
            {
               id: 68,
                name: "Mango",
                photo: images.mango,
                price: 10.00,
                rating:3,
                reviews:87
            
            },
            {
               id: 69,
                name: "Mix Cream",
                photo: images.mix_cream,
                price: 12.00,
                rating:5,
                reviews:102
            
            },
            {
               id: 70,
                name: "Orange",
                photo: images.orange,
                price: 8.00,
                rating:5,
                reviews:107
            
            },
            {
               id: 71,
                name: "Waterlemon",
                photo: images.watermelon,
                price: 10.00,
                rating:5,
                reviews:99
            
            },
            {
               id: 72,
                name: "Strawberry",
                photo: images.popular_5,
                price: 11.00,
                rating:5,
                reviews:101
            
            },
        ]
    }


]

const promotion = [
    {
        image:images.promo_1
    },
    {
        image:images.promo_2
    },
    {
        image:images.promo_3
    }
]

const hamburger = {
    id: 1,
    name: "Hamburger",
    description: "Chicken patty hamburger",
    categories: [1, 2],
    price: 15.99,
    calories: 78,
    isFavourite: true,
  //  image: require("../assets/dummyData/hamburger.png")
}

const hotTacos = {
    id: 2,
    name: "Hot Tacos",
    description: "Mexican tortilla & tacos",
    categories: [1, 3],
    price: 10.99,
    calories: 78,
    isFavourite: false,
   // image: require("../assets/dummyData/hot_tacos.png")
}

const vegBiryani = {
    id: 3,
    name: "Veg Biryani",
    description: "Indian Vegetable Biryani",
    categories: [1, 2, 3],
    price: 10.99,
    calories: 78,
    isFavourite: true,
   // image: require("../assets/dummyData/veg_biryani.png")
}

const wrapSandwich = {
    id: 4,
    name: "Wrap Sandwich",
    description: "Grilled vegetables sandwich",
    categories: [1, 2],
    price: 10.99,
    calories: 78,
    isFavourite: true,
  //  image: require("../assets/dummyData/wrap_sandwich.png")
}

const menu = [
    {
        id: 1,
        name: "Featured",
        list: [
            hamburger, hotTacos, vegBiryani,
        ]
    },
    {
        id: 2,
        name: "Nearby you",
        list: [
            hamburger, vegBiryani, wrapSandwich,
        ]
    },
    {
        id: 3,
        name: "Popular",
        list: [
            hamburger, hotTacos, wrapSandwich,
        ]
    },
    {
        id: 4,
        name: "Newest",
        list: [
            hamburger, hotTacos, vegBiryani,
        ]
    },
    {
        id: 5,
        name: "Trending",
        list: [
            hamburger, vegBiryani, wrapSandwich,
        ]
    },
    {
        id: 6,
        name: "Recommended",
        list: [
            hamburger, hotTacos, wrapSandwich,
        ]
    },

]


export default {
    myProfile,
    categories,
    recommanded,
    menu,
    promotion,
    favourite,
    offers,
    restaurantMenu,
    
    
}