const Button = ({ link, label, style, type, size, icon }) => {
    const sizeClasses = {
      default: 'btn',
      large: 'btn btn-lg',
      small: 'btn btn-sm',
      tiny: 'btn btn-xs',
      wide: 'btn btn-wide',
    };
  
    return (
      <button
        className={`
          ${sizeClasses[size] || 'btn'}
          ${style === 'primary' ? 'btn-primary' : ''}
          ${style === 'secondary' ? 'btn-secondary' : ''}
          ${style === 'accent' ? 'btn-accent' : ''}
          ${style === 'info' ? 'btn-info' : ''}
          ${style === 'success' ? 'btn-success' : ''}
          ${style === 'warning' ? 'btn-warning' : ''}
          ${style === 'error' ? 'btn-error' : ''}
          ${style === 'outline' ? 'btn-outline' : ''}
          ${style === 'ghost' ? 'btn-ghost' : ''}
          ${style === 'link' ? 'btn-link' : ''}
          
        `}
      
      >   
      {icon && ( 
          <span dangerouslySetInnerHTML={{ __html: icon }} /> 
        )}
        <a href={link}>{label}</a>
      </button>
    );
  };
  
  export default Button;