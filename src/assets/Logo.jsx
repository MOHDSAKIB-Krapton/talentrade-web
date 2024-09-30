import React from "react";

function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="70 0 210 140"
      preserveAspectRatio="xMidYMid meet"
      className="bg-[#9951DB] rounded-full "
    >
      <path
        fill="#fff"
        d="m232.077 70 1.122-1.124c15.734-15.735 15.736-41.338 0-57.074s-41.34-15.736-57.076 0L175 12.924l-1.121-1.122c-15.736-15.736-41.341-15.736-57.077 0-15.736 15.736-15.736 41.34.001 57.074L117.925 70l-1.122 1.122c-15.737 15.736-15.737 41.338-.001 57.077 15.738 15.734 41.342 15.734 57.077 0l1.121-1.123 1.123 1.123c15.736 15.734 41.34 15.734 57.076 0 15.736-15.74 15.734-41.341 0-57.077L232.077 70zm-50.985-53.228c12.995-12.995 34.14-12.995 47.133 0 12.996 12.995 12.996 34.142.002 47.135l-37.836 37.836c-2.897 2.898-3.603 6.336-.17 9.81l1.293 1.253c7.249 7.25 19.043 7.25 26.292 0s7.25-19.044.002-26.293l-1.123-1.123 2.723-2.723 1.124 1.123c8.753 8.75 8.753 22.992 0 31.742-8.75 8.75-22.993 8.75-31.743 0 0 0-.551-.464-1.296-1.214-.685-.695-7.503-7.62.174-15.299l37.835-37.836c11.494-11.492 11.494-30.191 0-41.686-11.493-11.49-30.19-11.49-41.683.002l-1.125 1.122-2.725-2.724 1.123-1.125zm31.744 91.066c-4.51 4.506-11.845 4.506-16.355 0l-1.122-1.123 16.354-16.354 1.123 1.12c4.508 4.511 4.508 11.846 0 16.357zm-91.064-91.066c12.995-12.995 34.141-12.995 47.137 0l37.832 37.833-2.725 2.728-37.834-37.836c-11.494-11.492-30.19-11.492-41.683 0-11.494 11.493-11.494 30.192 0 41.685l1.121 1.123-2.725 2.725-1.123-1.121c-12.995-12.995-12.995-34.14 0-47.137zm73.589 16.512 1.122-1.123c4.508-4.508 11.844-4.508 16.355 0 4.506 4.508 4.506 11.843 0 16.355l-1.123 1.122-16.354-16.354zM135.8 82.905l-3.607 3.606c-7.25 7.25-7.25 19.045 0 26.294 7.247 7.249 19.043 7.249 26.292 0l1.123-1.123c5.54-5.537-1.128-11.051-4.335-14.26l-2.09-2.106-9.929-9.93 2.726-2.722 13.206 13.205 1.043 1.046c9.71 9.705 2.857 16.738 2.104 17.49l-1.123 1.124c-8.751 8.754-22.991 8.75-31.744 0-8.75-8.75-8.75-22.992.001-31.745l37.838-37.834 2.724 2.728-18.84 18.837-15.389 15.39zm2.484 7.458 16.354 16.349-1.123 1.124c-4.51 4.507-11.844 4.51-16.352 0-4.508-4.508-4.508-11.845 0-16.353l1.121-1.12zM175 53.647 191.35 70l-16.352 16.35L158.645 70l16.354-16.353zm-16.513-26.453c-7.249-7.252-19.044-7.249-26.292 0-7.249 7.246-7.25 19.044 0 26.293l1.122 1.123-2.726 2.723-1.123-1.121c-8.751-8.753-8.75-22.993 0-31.746 8.753-8.75 22.993-8.752 31.745 0l37.836 37.836-2.726 2.725-37.836-37.833zm-3.848 6.092-16.354 16.352-1.121-1.122c-4.51-4.51-4.51-11.845-.002-16.355 4.508-4.508 11.844-4.508 16.354.003l1.123 1.122zm73.587 89.941c-12.993 12.995-34.138 12.995-47.133 0l-1.414-1.265c-.308-.31-2.914-2.898-4.833-6.897-1.79 3.78-4.168 6.372-4.813 7.039l-1.123 1.123c-12.996 12.995-34.142 12.995-47.137 0-12.995-12.995-12.995-34.14 0-47.138l37.836-37.833 2.725 2.727L124.5 78.817c-11.494 11.494-11.494 30.192 0 41.685 11.492 11.494 30.19 11.494 41.683 0l1.183-1.186c2.984-3.097 5.237-7.877 5.403-12.8 0-.145.01-.29.014-.431.034-3.849-1.226-7.748-4.449-10.975l-6.004-6.004-.578-.615-10.798-10.797 2.725-2.727 15.078 15.078 1.265 1.288c2.237 2.239 3.825 4.466 4.917 6.641 1.097-2.097 2.652-4.247 4.825-6.421l.209-.23 37.837-37.835c7.248-7.249 7.248-19.046-.001-26.295-7.248-7.25-19.043-7.25-26.292 0l-1.124 1.124-2.723-2.725 1.121-1.125c8.75-8.75 22.993-8.75 31.743 0 8.753 8.754 8.753 22.993 0 31.743l-37.84 37.838-1.194 1.198c-7.572 7.572-4.598 18.416.94 23.95l1.378 1.306c11.493 11.494 30.19 11.494 41.683 0 11.494-11.493 11.494-30.19 0-41.685l-1.123-1.123 2.725-2.727 1.123 1.125c12.996 12.995 12.996 34.138 0 47.135z"
      />
    </svg>
  );
}

export default Logo;
