import { VoidFunctionComponent, SVGProps } from "react";

const Logo: VoidFunctionComponent<SVGProps<SVGSVGElement>> = ({
  fill = "#DFBBFE",
  ...props
}) => {
  return (
    <>
    <style jsx>{`
    .logoContainer{
      display: flex;
      justify-content: center;
      width:100%;
    }
    svg{
      width:75px;
      position:fixed;
      margin-top:1em;  
    }
    `}</style>
    <div className="logoContainer">
    <svg
      viewBox="0 0 84 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.62 23.726c1.004 0 1.822-.78 1.822-1.74 0-.944-.818-1.754-1.823-1.754-1.02 0-1.807.81-1.807 1.755 0 .96.788 1.74 1.807 1.74zM27.014 23.516v-4.273c0-.93.68-1.545 1.623-1.545.71 0 1.235.525 1.235 1.2v4.618h3.4v-4.273c0-.915.71-1.545 1.59-1.545.711 0 1.283.42 1.283 1.2v4.618h3.399v-5.083c0-1.875-1.514-2.88-3.538-2.88-1.375 0-2.472.45-3.214 1.32-.587-.87-1.545-1.32-2.966-1.32-1.251 0-2.24.405-2.935 1.215l-.077-.99h-3.199v7.738h3.4zM46.049 23.801c2.904 0 5.484-1.484 5.484-4.109 0-2.654-2.487-4.168-5.484-4.168-2.936 0-5.485 1.454-5.485 4.168 0 2.625 2.55 4.11 5.485 4.11zm-.016-2.144c-1.143 0-2.039-.9-2.039-1.995 0-1.08.896-1.994 2.04-1.994 1.143 0 2.07.915 2.07 1.994 0 1.095-.927 1.995-2.07 1.995zM55.952 23.516v-4.124c0-1.034.757-1.62 1.777-1.62.865 0 1.39.466 1.39 1.23v4.514h3.399v-5.128c0-1.845-1.576-2.82-3.6-2.82-1.344 0-2.364.435-3.059 1.275l-.123-1.065h-3.183v7.738h3.399zM74.203 15.778h-4.095l-1.544 1.32-1.406 1.29.03-1.635V12.84H63.79v10.677h3.399v-2.414l.818-.6.726.93 1.669 2.084h4.14l-4.233-4.618 3.894-3.12z"
        fill={fill}
      />
      <path
        d="M78.925 23.831c3.136 0 4.944-.84 4.944-2.819 0-1.335-1.05-2.22-3.585-2.43l-1.776-.15c-.804-.074-1.159-.254-1.159-.63 0-.404.54-.614 1.421-.614 1.113 0 1.514.24 1.638.78l3.152-.075c-.278-1.56-1.823-2.4-4.666-2.4-3.152 0-4.558 1.035-4.558 2.625 0 1.364 1.051 2.16 3.477 2.384l1.823.165c.695.06 1.081.24 1.081.66 0 .465-.51.735-1.638.735-1.19 0-1.622-.33-1.76-.945l-3.23.075c.216 1.62 1.622 2.64 4.836 2.64zM3.399 12.795V8.521c0-.93.68-1.544 1.622-1.544.71 0 1.236.525 1.236 1.2v4.618h3.399V8.521c0-.914.71-1.544 1.591-1.544.71 0 1.283.42 1.283 1.2v4.618h3.398V7.712c0-1.875-1.514-2.88-3.538-2.88-1.375 0-2.471.45-3.213 1.32-.587-.87-1.545-1.32-2.966-1.32-1.252 0-2.24.405-2.936 1.215l-.077-.99H0v7.738h3.399zM22.464 13.065c2.225 0 4.234-.735 5.021-2.52l-3.26-.164c-.34.555-.911.825-1.776.825-1.267 0-1.978-.555-2.148-1.59h7.447v-.39c0-2.744-2.317-4.408-5.454-4.408-2.95 0-5.376 1.514-5.376 4.108 0 2.67 2.41 4.14 5.546 4.14zm-2.147-4.993c.2-.945.865-1.41 1.993-1.41 1.143 0 1.777.465 1.931 1.41h-3.924zM36.204 5.807c-.773-.705-1.808-1.034-3.09-1.034-2.38 0-4.496 1.424-4.496 4.153 0 2.61 1.777 4.184 4.558 4.184 1.452 0 2.518-.45 3.213-1.32l.093 1.005h3.12V2.118h-3.398v3.69zm-2.102 5.054c-1.066 0-2.054-.48-2.054-1.98 0-1.47 1.004-2.009 2.07-2.009 1.298 0 2.163.69 2.163 2.01 0 1.334-.865 1.979-2.178 1.979zM42.621 4.278c.973 0 1.7-.675 1.7-1.665 0-.93-.727-1.62-1.7-1.62s-1.7.69-1.7 1.62c0 .99.727 1.665 1.7 1.665zm1.7 8.517V5.057h-3.4v7.738h3.4zM55.933 12.795c-.278-.495-.371-1.2-.371-1.95V7.773c0-1.905-1.22-2.984-4.836-2.984-3.399 0-4.743.93-4.974 2.714l3.244.12c.077-.945.726-1.185 1.653-1.185 1.097 0 1.514.3 1.514.975v.135c0 .255-.093.36-.989.45l-2.502.24c-2.658.255-3.353 1.11-3.353 2.474 0 1.604 1.128 2.4 3.584 2.4 1.576 0 2.689-.346 3.446-1.05.061.314.139.524.216.734h3.368zm-6.118-1.44c-.819 0-1.19-.284-1.19-.84 0-.524.278-.839 1.483-.974l1.916-.225c.077-.015.155-.015.232-.045v.48c0 1.02-1.097 1.605-2.441 1.605z"
        fill={fill}
      />
    </svg></div></>
  );
};

export default Logo;
