/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyIcon, PasteIcon } from './Icons';

const CodeArea = ({ children, language }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [copied])

  return (
    <div className="code-area">
      <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
        <button className='icon copy-icon'>
          {copied ? <PasteIcon /> : <CopyIcon />}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter
        language={language}
        style={materialDark}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeArea