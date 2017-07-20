import config from '../config/config';
import logger from '../logger/logger';
const SirTrevor = require('sir-trevor');

const run = () => {
  logger.info(`Application run, env: ${config.env}, public path: ${config.server.publicPath}, API path: ${config.server.apiPath}`);

  const editor = new SirTrevor.Editor({
    el: document.querySelector('.js-st-instance'),
    defaultType: 'Text',
    iconUrl: './assets/sir-trevor-icons.svg',
    blockTypes: ['Text', 'Tweet', 'Image', 'Video', 'Quote', 'Heading', 'List']
  });

  editor.initialize({ iconUrl: 'assets/sir-trevor-icons.svg'});

  console.log(editor.options);

  // Remove the most recently-added event handlers so that when the code runs again and
  // adds a new event handler, we don't end up with duplicate handlers.
  // See: http://andrewhfarmer.com/webpack-hmr-tutorial/
  if (module.hot) {
    module.hot.dispose(() => {
      logger.debug('Disposing handlers');
      // remove listeners here
    });
  }
};

export default run;
