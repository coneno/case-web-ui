import React from 'react';
import { containerClassName } from '../../constants';
import { useFetchTextFile } from '../../hooks/useFetchTextFile';
import MarkdownRenderer from '../displays/MarkdownRenderer';
import ComposedLineAndScatterChartLoader from './ComposedLineAndScatterChartLoader';
import MapWithTimeSliderLoader from './MapWithTimeSliderLoader';

interface MarkdownLoaderProps {
  className?: string;
  markdownUrl: string;
  languageCode: string;
  flavor?: string;
}

const customFlavorRenderers = (language: string) => {
  return {
    default: {
      'inlineCode': (node: any) => <p className="border-primary border-top-2 border-bottom-2 text-grey-6" >{node.children}</p>,
      'paragraph': (node: any) => node.children[0].type.name === "image" || node.children[0].type.name === "inlineCode" ? (
        <div {...node} />
      ) : (
          <p {...node} />
        )
      ,
    },
    chartRenderer: {
      'inlineCode': (node: any) => <p className="border-primary border-top-2 border-bottom-2 text-grey-6" >{node.children}</p>,
      'paragraph': (node: any) => node.children[0].type.name === "image" || node.children[0].type.name === "inlineCode" ? (
        <div {...node} />
      ) : (
          <p {...node} />
        )
      ,
      'definition': (value: any) => {
        const id = value.identifier.split(':')[0];
        switch (id) {
          case 'mapchart':
            const mapUrl = value.identifier.substring(value.identifier.indexOf(':') + 1);
            return <MapWithTimeSliderLoader
              mapUrl={mapUrl}
              dataUrl={value.url}
            />;
          case 'line-and-scatter-chart':
            return <ComposedLineAndScatterChartLoader
              language={language}
              dataUrl={value.url}
            />
          default:
            return <p>{'unknown: ' + value.identifier}</p>
        }
      },
    }
  }
}

const MarkdownLoader: React.FC<MarkdownLoaderProps> = (props) => {
  const { content, loading } = useFetchTextFile(props.markdownUrl);

  if (loading) {
    return <div className={containerClassName}>
      <div className="d-flex align-items-center my-3 bg-secondary justify-content-center h-100" style={{ minHeight: 300 }}>
        <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  }
  if (!content) {
    return null;
  }

  let renderers = customFlavorRenderers(props.languageCode).default;
  switch (props.flavor) {
    case 'chart-renderer':
      renderers = customFlavorRenderers(props.languageCode).chartRenderer;
  }

  return <MarkdownRenderer
    className={props.className}
    markdown={content}
    renderers={renderers}
  />
};

export default MarkdownLoader;
