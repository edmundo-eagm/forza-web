import { RenderMode, ServerRoute } from '@angular/ssr';
import { getPrerenderParams } from '../server';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'products/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        'new',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
      ].map(id => ({ id })); // Generates paths like: ['product/1', 'product/2', 'product/3']
    },
  },
];
