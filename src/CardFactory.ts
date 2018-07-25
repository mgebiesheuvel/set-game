import { Card } from './Card';

/**
 * Class CardFactory
 */
export class CardFactory {

    /**
     * Create a new instance of Card.
     * @return {Card} instance of Card
     */
    public create () {
        return new Card();
    }
}