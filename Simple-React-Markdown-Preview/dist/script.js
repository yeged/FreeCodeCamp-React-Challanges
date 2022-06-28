const App = () => {

  const [input, setInput] = React.useState(placeholder);

  const onChange = e => {
    setInput(e.target.value);
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement(Editor, { value: input, onChange: onChange }), /*#__PURE__*/
    React.createElement(Preview, { source: input })));


};

const Editor = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "editorContainer" }, /*#__PURE__*/
    React.createElement("h1", null, "Markdown Editor"), /*#__PURE__*/
    React.createElement("textarea", {
      id: "editor",
      autofocus: true,
      className: "textarea",
      value: props.value,
      onChange: props.onChange })));



};

const Preview = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "previewContainer" }, /*#__PURE__*/
    React.createElement("h1", null, "Previewer"), /*#__PURE__*/
    React.createElement("div", { id: "preview" }, /*#__PURE__*/
    React.createElement(ReactMarkdown, { source: props.source, className: "line-break" }))));



};

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));