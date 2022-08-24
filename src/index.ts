import launchHttpServer from './HTTPServer';
import simulateInteraction from './simulateInteraction';
import classify from './classify';

const isSneakIntoBasket = async (url: { productUrl: string; cartUrl: string }) => {
  launchHttpServer();
  await simulateInteraction(url.productUrl, url.cartUrl);
  await classify();
};

export default { isSneakIntoBasket };
