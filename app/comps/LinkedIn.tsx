import React from 'react';

const LinkedIn = () => {
  React.useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      // key={theme}
      className="badge-base LI-profile-badge"
      data-locale="en_US"
      data-size="medium"
      data-theme="light"
      data-type="VERTICAL"
      data-vanity="alex-melnikov"
      data-version="v1"
    >
      <a
        className="badge-base__link LI-simple-link ms-4 underline"
        href="https://me.linkedin.com/in/alex-melnikov?trk=profile-badge"
      >
        LinkedIn profile
      </a>
      <div className="h-[5px]" />
    </div>
  );
};

LinkedIn.displayName = 'LinkedIn';

export default LinkedIn;
