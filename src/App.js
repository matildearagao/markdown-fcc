import React, { Component } from 'react';
import './App.css';
import marked from 'marked';



const initialMarkdown = `Marked - Markdown Parser
========================
# title
## subtitle

- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image
Inline \`code\`\

Indented code

// Some comments
    line 1 of code
    line 2 of code
    line 3 of code


\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

> Blockquotes can also be nested...

**This is bold text**

![Minion](https://octodex.github.com/images/minion.png)

`
marked.setOptions({
  breaks: true,
});


class App extends Component {


  state = {
    markdown: initialMarkdown
  }
  handleChange = (e) => {
    this.setState({
      markdown: e.target.value
    })
  }

 
  render() {

    return (


      <div className="container py-4">
        <h1 className="text-center text-primary my-4"> Markdown Previewer</h1>
        <div className="row mt-3">
          <div className="col-12 mx-auto col-md-6">
            <textarea
              style={{ width: "100%", height: "100%" }}
              id="editor" 
              onChange={this.handleChange}
              value={this.state.markdown}>
            </textarea>
          </div>
          <div className="col-12 mx-auto col-md-6 border">
            <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.markdown) }}></div>
          </div>
        </div>


      </div>
    );
  }
}

export default App;
