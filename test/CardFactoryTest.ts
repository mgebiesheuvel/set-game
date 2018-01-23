import { CardFactory } from './../src/CardFactory';
import { Card } from './../src/Card';
import { expect } from 'chai';

describe('create card', () => {
    it('should create a instance of Card', () => {        
        const sut = new CardFactory();
        expect(sut.create()).to.instanceOf(Card);
    })
});
