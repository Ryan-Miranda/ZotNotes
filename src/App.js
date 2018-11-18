import React, { Component } from 'react';
import './App.css'; // Main CSS
import 'react-quill/dist/quill.snow.css'; // For Quill

// Components
import Navbar from './Components/Navbar.js';
import TextEditor from './Components/TextEditor.js';
import StudyMaterial from './Components/StudyMaterial.js';

// Other Node Libraries
import axios from "axios";

class App extends Component {
  state = {
    text: "",
    flashcard_queries: [],
  }

  setQuillRef = (ref) => {
    this.quill = ref;
  }

  handleQuillChange = (value) => {
    this.setState({ text: value });
  }

  processWords = () => {
    const content = this.quill.getEditor().getContents();

    let youtube_queries = {};

    let flashcard = null;
    for (const words of content.ops) {
      if (words.hasOwnProperty("attributes")) {
        if (words.attributes.bold) {
          if (youtube_queries.hasOwnProperty(words.insert))
            youtube_queries[words.insert.trim()] += 1;
          else
            youtube_queries[words.insert.trim()] = 1;
        }
        else if (words.attributes.underline) {
          flashcard = { term: words.insert }
        }
        else if (words.attributes.italic) {
          flashcard["definition"] = words.insert;
          let copy = this.state.flashcard_queries;
          copy.push(flashcard);
          this.setState({ flashcard_queries : copy });
        }
      }
    }

    const top3 = Object.entries(youtube_queries).sort((a,b) => {
      if (a[1] !== b[1])
        return b[1]-a[1];
      else
        return (a[0].attr > b.attr) - (b[0].attr < b.attr);
    }).slice(0,3);

    // console.log("YOUTUBE QUERIES:", youtube_queries);
    // console.log("FLASHCARDS:", flashcard_queries);
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <Navbar />
          <div className="splitContainer">
            <div className="split" id="splitLeft">
              <TextEditor setRef={this.setQuillRef}
                          text={this.state.text}
                          handleChange={this.handleQuillChange}
              />
            </div>
            <div className="split" id="splitRight">
              <StudyMaterial handleClick={()=>this.setState({ flashcard_queries: [] }, ()=>this.processWords())} flashcards={this.state.flashcard_queries}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
