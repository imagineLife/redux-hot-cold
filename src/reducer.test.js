import reducer from './reducer';
import {makeGuess, newGame, toggleInfoModal} from './actions';

describe('hotColdReducer', () => {
	const guessIceCold = '90';


	//1. Setup dummy-state & dummy-data
	let state = {
		guesses: [],
	    feedback: 'Make your guess!',
	    correctAnswer: 10,
	    showInfoModal: false
	};

	it('should make a guess on makeGuess?!', () => {
	//2.run the reducer, passing in actions
		state = reducer(state, makeGuess(guessIceCold));

		expect(state).toEqual({
			guesses:[guessIceCold],
			feedback: 'You\'re Ice Cold...',
			showInfoModal: state.showInfoModal,
			correctAnswer: state.correctAnswer
		});
	});

	it('should reset the state on newGame', () => {
	//2.run the reducer, passing in actions
		state.guesses = [9,2,1];

		state = reducer(state, newGame());
		expect(state.guesses).toEqual([]);
	});

	it('should set toggleInfoModal', () => {

		//2.run the reducer, passing in actions
		state = reducer(state, toggleInfoModal());

		expect(state.showInfoModal).toEqual(true);
	})
})