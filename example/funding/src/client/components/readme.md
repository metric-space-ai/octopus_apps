## Button Component

The Button component is a versatile and customizable button that can be used for various actions within a user interface. It supports different variants, sizes, loading states, icons, and click events.

### Props

| Prop | Type | Description |
|---|---|---|
| className | string | Optional CSS class name to apply custom styles |
| variant | 'primary' | 'secondary' | 'transparent' | 'outline' | 'dangerous' | 'disabled' | Button style variant |
| size | 'default' | 'large' | 'medium' | 'small' | Button size |
| loading | boolean | Whether to display a loading indicator |
| disabled | boolean | Whether to disable the button |
| iconBefore | React.ReactNode | Optional React node to display an icon before the button text |
| iconAfter | React.ReactNode | Optional React node to display an icon after the button text |
| title | string | The button text |
| onClick | () => void | Callback function to handle button click |
| ...props | React.ButtonHTMLAttributes<HTMLButtonElement> | Any additional HTML button attributes |

### Styling

The Button component uses CSS classes to style its appearance. The default styles are defined in the `ButtonStyle`, `ButtonHoverStyle`, `TextStyle`, and `Sizes` objects. These styles can be overridden by applying custom CSS classes or by using a CSS-in-JS library like styled-components.

### Usage

The Button component can be used like any other React component. Here is an example of how to use the Button component:

```javascript
import Button from './Button';

const MyComponent = () => {
  return (
    <div>
      <Button variant="primary" title="Primary Button" onClick={() => console.log('Primary button clicked')} />
      <Button variant="secondary" title="Secondary Button" onClick={() => console.log('Secondary button clicked')} />
      <Button variant="transparent" title="Transparent Button" onClick={() => console.log('Transparent button clicked')} />
      <Button variant="outline" title="Outlined Button" onClick={() => console.log('Outlined button clicked')} />
      <Button variant="dangerous" title="Dangerous Button" onClick={() => console.log('Dangerous button clicked')} />
      <Button variant="disabled" title="Disabled Button" disabled />
    </div>
  );
};


This code will render six buttons with different variants and click handlers.

### Accessibility

The Button component is designed to be accessible to users with disabilities. It follows WAI-ARIA best practices and provides a meaningful and consistent user experience for all users.
