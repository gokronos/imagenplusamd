import { audiovisualServiceDetails } from './audiovisual';
import { desarrolloWebServiceDetails } from './desarrollo-web';
import { disenoServiceDetails } from './diseno';
import { inteligenciaArtificialServiceDetails } from './inteligencia-artificial';
import { marketingServiceDetails } from './marketing';

const serviceDetails = {
  ...disenoServiceDetails,
  ...marketingServiceDetails,
  ...desarrolloWebServiceDetails,
  ...audiovisualServiceDetails,
  ...inteligenciaArtificialServiceDetails,
};

function normalizeLabel(label: string) {
  return label
    .replace(/Ã¡/g, 'a')
    .replace(/Ã©/g, 'e')
    .replace(/Ã­/g, 'i')
    .replace(/Ã³/g, 'o')
    .replace(/Ãº/g, 'u')
    .replace(/Ã±/g, 'n')
    .replace(/Ã/g, 'A')
    .replace(/Ã‰/g, 'E')
    .replace(/Ã/g, 'I')
    .replace(/Ã“/g, 'O')
    .replace(/Ãš/g, 'U')
    .replace(/Ã‘/g, 'N')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .toLowerCase();
}

export function getServiceHref(label: string) {
  const key = normalizeLabel(label);
  return serviceDetails[key as keyof typeof serviceDetails]?.href;
}
