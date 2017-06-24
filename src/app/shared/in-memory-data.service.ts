import { InMemoryDbService } from 'angular-in-memory-web-api';

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
                price: '12'
            },
            {
                id: '2',
                categoryId: '1',
                title: 'Borscht',
                price: '8'
            },
            {
                id: '3',
                categoryId: '1',
                title: 'Mushroom soup',
                price: '16'
            }
            ,
            {
                id: '4',
                categoryId: '2',
                title: 'Cutlet in Kiev',
                price: '13'
            },
            {
                id: '5',
                categoryId: '2',
                title: 'Rise',
                price: '6'
            },
            {
                id: '6',
                categoryId: '2',
                title: 'Potato with meat',
                price: '14'
            },
            {
                id: '7',
                categoryId: '3',
                title: 'Ice',
                price: '9'
            },
            {
                id: '8',
                categoryId: '3',
                title: 'Napoleon cake',
                price: '12'
            },
            {
                id: '9',
                categoryId: '3',
                title: 'Cheesecake',
                price: '13'
            }
        ];

        return {
            categories,
            meal
        }
    }
}
