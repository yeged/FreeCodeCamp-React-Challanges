const App = () => {

  const [quotes, setQuotes] = React.useState(null);
  const [index, setIndex] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const handleNewQuote = () => {
    setIndex(Math.floor(Math.random() * quotes.quotes.length));
    console.log(index);
  };

  React.useEffect(() => {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json').
    then(response => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    }).
    then(data => {
      setQuotes(data);
      setIndex(Math.floor(Math.random() * data.quotes.length));
    }).
    catch(error => {
      console.log("Error", error);
    }).
    finally(() => {
      setLoading(false);
    });
  }, []);



  if (loading) {
    return /*#__PURE__*/React.createElement("div", null);
  } else {
    return /*#__PURE__*/(
      React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
      React.createElement("div", { id: "text", className: "quote-text" }, /*#__PURE__*/
      React.createElement("p", null, /*#__PURE__*/React.createElement("em", null, quotes.quotes[index].quote))), /*#__PURE__*/

      React.createElement("div", { id: "author", className: "quote-author" }, /*#__PURE__*/
      React.createElement("p", null, "-  ", quotes.quotes[index].author, " ")), /*#__PURE__*/

      React.createElement("div", { className: "buttons" }, /*#__PURE__*/
      React.createElement("a", {
        href: `https://twitter.com/intent/tweet?hashtags=quotes&text=${quotes.quotes[index].quote}  - ${quotes.quotes[index].author}`,
        className: "button",
        id: "tweet-quote",
        title: "Tweet this quote!",
        target: "_top" }, /*#__PURE__*/
      React.createElement("i", { className: "fab fa-twitter" })), /*#__PURE__*/

      React.createElement("button", { id: "new-quote", onClick: handleNewQuote, className: "button" }, "New Quote"))));


  }


};
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));