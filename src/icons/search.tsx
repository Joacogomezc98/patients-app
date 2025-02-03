interface Props {
  color?: string;
}

export const SearchIcon: React.FC<Props> = ({ color }) => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.70817 12.2501C9.76875 12.2501 12.2498 9.76899 12.2498 6.70841C12.2498 3.64784 9.76875 1.16675 6.70817 1.16675C3.64759 1.16675 1.1665 3.64784 1.1665 6.70841C1.1665 9.76899 3.64759 12.2501 6.70817 12.2501Z"
        stroke={color || '#6B7983'}
        strokeLinecap="round"
      />
      <path
        d="M12.8332 12.8334L11.6665 11.6667"
        stroke={color || '#6B7983'}
        strokeLinecap="round"
      />
    </svg>
  );
};
