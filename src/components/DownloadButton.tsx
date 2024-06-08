import { Button } from '@/components/ui/button';
import { globalConfig } from '@/constants';

export const DownloadButton = () => {
  return (
    <Button variant={'outline'} className="hero-button-holder">
      <a
        href={globalConfig.chromeStoreUrl}
        target="_blank"
        className="button chrome w-inline-block flex gap-2 items-center"
      >
        <img
          src="/chrome.png"
          loading="lazy"
          width="28"
          sizes="(max-width: 1279px) 28px, (max-width: 1439px) 2vw, 28px"
          alt=""
        />
        <div>Download for Chrome</div>
      </a>
    </Button>
  );
};
