/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyIcon, PasteIcon } from './Icons';

const CodeArea = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [copied])

  return (
    <div className="code-area">
      <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
        <button className='icon copy-icon'>
          {copied ? <PasteIcon /> : <CopyIcon />}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter
        language={language}
        style={dracula}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

const CodeWrapper = ({ children }) => {
  console.log(children.props.children);
  return (
    <pre className='code-wrapper'>
      <CodeArea
        // eslint-disable-next-line react/no-children-prop
        code={children.props.children}
        language={children.props.className.replace('lang-', '')}
      />
    </pre>
  )
}

export default CodeWrapper