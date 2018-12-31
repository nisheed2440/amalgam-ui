export default async function() {
  const React = await import('react');
  const ReactDom = await import('react-dom');
  const Turbolinks = await import('turbolinks');
  const MobX = await import('mobx');
  return { React, ReactDom, Turbolinks, MobX };
}
