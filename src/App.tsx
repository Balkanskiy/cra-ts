import React from 'react';
import logo from './logo.svg';
import './App.css';
import MiniVideoPlayer from "@webteam/webhelp/mini-video-player";
import {CodeBlock, CodeCollapse} from '@webteam/webhelp/code-blocks'

const testData = {
  source: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
  width: 706,
  height: 400
};

const codeData = {
  code:
    '\n' +
    '            public class NotMyClass {\n' +
    '                [[[int|https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html]]] aInteger;\n' +
    '                double bDouble;\n' +
    '\n' +
    '            \tpublic MyClass(int myAIntegerParam, [[[double|https://docs.oracle.com/javase/7/docs/api/java/lang/Double.html]]] myBDoubleParam, double NotMyBDoubleParam) {\n' +
    '            \t\tcInteger = myAIntegerParamBeta;\n' +
    '            \t}\n' +
    '            }\n' +
    '        ',
  lang: 'java',
  isCodeHighLighted: false,
}

function App() {
  return (
    <div className="App">
      <MiniVideoPlayer {...testData} />
      <CodeBlock
        code={codeData.code}
        languageName={codeData.lang}
        isHighlighted={codeData.isCodeHighLighted}
        clipboardId={'clipboardId'}
        prompt={[]}
      />
      <CodeCollapse 
        code={codeData.code}
        languageName={codeData.lang}
        isHighlighted={codeData.isCodeHighLighted}
        clipboardId={'clipboardId'}
        prompt={[]}
        isCodeExpanded={false}
        synopsis={'public static class Main()'}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
