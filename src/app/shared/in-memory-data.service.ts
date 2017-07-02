import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const categories = [
      {
        id: '1',
        title: 'First course'
      },
      {
        id: '2',
        title: 'Second course'
      },
      {
        id: '3',
        title: 'Dessert'
      }
    ];

    const meal = [
      {
        id: '1',
        categoryId: '1',
        title: 'Thai soup with seafood',
        image: 'http://www.h-and-h.com.ua/wp-content/uploads/2015/03/sup-tayskiy-moreprod-600x600.jpg',
        weight: '300',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 12
      },
      {
        id: '2',
        categoryId: '1',
        title: 'Cheese soup with vegetables',
        image: 'http://www.h-and-h.com.ua/wp-content/uploads/2016/05/sup-syr-ovochi-600x600.jpg',
        weight: '300',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 8
      },
      {
        id: '3',
        categoryId: '1',
        title: 'Ramen soup with chicken',
        image: 'http://www.h-and-h.com.ua/wp-content/uploads/2016/05/sup-ramen-kur-600x600.jpg',
        weight: '300',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 16
      }
      ,
      {
        id: '4',
        categoryId: '1',
        title: 'Cream-soup with mushroom',
        image: 'http://www.h-and-h.com.ua/wp-content/uploads/2016/12/sup-cream-grebnoy-600x600.jpg',
        weight: '300',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 13
      },
      {
        id: '5',
        categoryId: '2',
        title: 'Chicken burger',
        image: 'http://www.h-and-h.com.ua/wp-content/uploads/2016/05/chiken-burger-600x600.jpg',
        weight: '350',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 12
      },
      {
        id: '6',
        categoryId: '2',
        title: 'Beef Burger',
        image: 'http://www.h-and-h.com.ua/wp-content/uploads/2016/05/DSC_7003_thumb-2-600x600.jpg',
        weight: '350',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 14
      },
      {
        id: '7',
        categoryId: '2',
        title: 'Boiled chicken with steam rice',
        image: 'http://www.h-and-h.com.ua/wp-content/uploads/2016/11/kurka-ris-600x600.jpg',
        weight: '350',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 10
      },
      {
        id: '8',
        categoryId: '2',
        title: 'Buckwheat',
        image: 'http://www.h-and-h.com.ua/wp-content/uploads/2016/06/kasha-grechnevaya-600x600.jpg',
        weight: '200',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 8
      },
      {
        id: '9',
        categoryId: '3',
        title: 'Chocolate Brownie',
        image: 'http://www.h-and-h.com.ua/wp-content/uploads/2016/12/brauni-600x600.jpg',
        weight: '190',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 7
      },
      {
        id: '10',
        categoryId: '3',
        title: 'Apple strudel',
        image: 'http://www.h-and-h.com.ua/wp-content/uploads/2016/12/shtrudel-yabloko-600x600.jpg',
        weight: '190',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 6
      },
      {
        id: '11',
        categoryId: '3',
        title: 'Homemade cheesecake with raisins',
        image: 'http://www.h-and-h.com.ua/wp-content/uploads/2016/01/tvorog-chizkeyk-600x600.jpg',
        weight: '180',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 8
      }
    ];

    return {
      categories,
      meal
    }
  }
}
