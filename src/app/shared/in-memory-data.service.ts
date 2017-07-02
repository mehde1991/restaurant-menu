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
        title: 'Lagman',
        image: 'http://via.placeholder.com/300x300',
        price: 12
      },
      {
        id: '2',
        categoryId: '1',
        title: 'Borscht',
        image: 'http://via.placeholder.com/300x300',
        price: 8
      },
      {
        id: '3',
        categoryId: '1',
        title: 'Mushroom soup',
        image: 'http://via.placeholder.com/300x300',
        price: 16
      }
      ,
      {
        id: '4',
        categoryId: '2',
        title: 'Cutlet in Kiev',
        image: 'http://via.placeholder.com/300x300',
        price: 13
      },
      {
        id: '5',
        categoryId: '2',
        title: 'Rise',
        image: 'http://via.placeholder.com/300x300',
        price: 6
      },
      {
        id: '6',
        categoryId: '2',
        title: 'Potato',
        image: 'http://via.placeholder.com/300x300',
        price: 14
      },
      {
        id: '7',
        categoryId: '3',
        title: 'Ice',
        image: 'http://via.placeholder.com/300x300',
        price: 9
      },
      {
        id: '8',
        categoryId: '3',
        title: 'Napoleon cake',
        image: 'http://via.placeholder.com/300x300',
        price: 12
      },
      {
        id: '9',
        categoryId: '3',
        title: 'Cheesecake',
        image: 'http://via.placeholder.com/300x300',
        price: 13
      }
    ];

    return {
      categories,
      meal
    }
  }
}
