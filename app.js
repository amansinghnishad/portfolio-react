const parent = React.createElement('div' , {id: 'parent'} , [
    React.createElement('h1' , {id: 'heading'} , 'Hello World'),[
        React.createElement('p' , {id: 'para'} , 'This is a paragraph'),[
            React.createElement('span' , {id: 'span'} , 'This is a span')
        ]
    ]
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);