import {
  MENU_UPDATE_SELECTION,
  MENU_UPDATE_COLLAPSE } from './constants';

export const updateSelection = (selected) => ({
  type: MENU_UPDATE_SELECTION,
  selected
});

export const updateCollapsed = (collapsed) => ({
  type: MENU_UPDATE_COLLAPSE,
  collapsed
});
