const h1= React.createElement('h1', {id: 'h1', key:'h1'}, 'Heading1');
const h2= React.createElement('h2', {id: 'h2', key: 'h2'}, 'Heading2');
const container = React.createElement('div', {}, [h1, h2]);
// const heading = React.createElement('h1', {}, "React Element");
const root = ReactDOM.render(container, document.getElementById('root'));
