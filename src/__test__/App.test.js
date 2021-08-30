import App from '../App';
import TestRenderer from 'react-test-renderer';

describe('App()', () => {
  it('should render App component', () => {
    const testRenderer = TestRenderer.create(<App />);
    const testInstance = testRenderer.root;

    console.log('testInstance', testInstance);

    expect(testInstance.findByType(SubComponent).props.foo).toBe('bar');
    expect(testInstance.findByProps({ className: "sub" }).children).toEqual(['Sub']);
  })
})
