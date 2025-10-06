import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  html: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { componentName } = req.query;

  if (!componentName || typeof componentName !== 'string') {
    return res.status(400).json({ html: 'Missing componentName' });
  }

  try {
    const componentPath = path.join(
      process.cwd(),
      'src',
      'ui',
      'components',
      componentName + '.tsx'
    );

    if (!fs.existsSync(componentPath)) {
      return res.status(404).json({ html: 'Component not found' });
    }

    const componentModule = await import(componentPath);
    const Component = componentModule.default;

    if (typeof Component !== 'function' || typeof Component.prototype?.render !== 'function') {
      return res.status(500).json({ html: 'Invalid component' });
    }

    const html = ReactDOMServer.renderToString(React.createElement(Component));
    res.status(200).json({ html });
  } catch (error) {
    console.error(error);
    res.status(500).json({ html: 'Error rendering component' });
  }
}