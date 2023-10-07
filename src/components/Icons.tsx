import type { TIcon } from "@src/models"

export const WatchImage: TIcon = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            ></path>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
    )
}

export const ArrowRight: TIcon = (props) => {
    return (
        <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            {...props}
        >
            <path
                d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export const ArrowLeft: TIcon = (props) => {
    return (
        <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            {...props}
        >
            <path
                d="M21 12H3m0 0l8.5-8.5M3 12l8.5 8.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

// icon:react | Devicons https://vorillaz.github.io/devicons/#/main | Theodore Vorillas
export const IconReact: TIcon = (props) => {
    return (
        <svg
            viewBox="0 0 34 32"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path
                fill="currentColor"
                d="M19.314 15.987a2.392 2.392 0 11-4.784 0 2.392 2.392 0 014.784 0z"
            />
            <path
                fill="currentColor"
                d="M16.922 24.783c1.878 1.826 3.729 2.906 5.221 2.906.489 0 .952-.103 1.337-.334 1.337-.772 1.826-2.701 1.363-5.453-.077-.489-.18-.977-.309-1.492.514-.154.977-.309 1.44-.463 2.598-1.003 4.038-2.392 4.038-3.909 0-1.543-1.44-2.932-4.038-3.909-.463-.18-.926-.334-1.44-.463.129-.514.232-1.003.309-1.492.437-2.803-.051-4.758-1.389-5.53-.386-.231-.849-.334-1.337-.334-1.466 0-3.344 1.08-5.221 2.906-1.852-1.826-3.704-2.906-5.195-2.906-.489 0-.952.103-1.337.334-1.337.772-1.826 2.701-1.363 5.453.077.489.18.977.309 1.492-.514.154-.977.309-1.44.463-2.598 1.003-4.038 2.392-4.038 3.909 0 1.543 1.44 2.932 4.038 3.909.463.18.926.334 1.44.463a16.882 16.882 0 00-.309 1.492c-.437 2.752.051 4.707 1.363 5.453.386.232.849.334 1.337.334 1.492.051 3.344-1.029 5.221-2.829zm-1.441-3.472c.463.026.952.026 1.44.026s.977 0 1.44-.026a24.523 24.523 0 01-1.44 1.723 24.252 24.252 0 01-1.44-1.723zm-3.189-2.649c.257.437.489.849.772 1.26a27.786 27.786 0 01-2.263-.386c.232-.694.489-1.415.797-2.135.206.411.437.849.694 1.26zM10.8 12.463c.72-.154 1.466-.283 2.263-.386-.257.412-.514.823-.772 1.26s-.489.849-.694 1.286a17.109 17.109 0 01-.797-2.161zm1.415 3.524c.334-.694.694-1.389 1.106-2.083.386-.669.823-1.337 1.26-2.006a35.293 35.293 0 014.682 0c.463.669.874 1.337 1.26 2.006.412.694.772 1.389 1.106 2.083a26.922 26.922 0 01-1.106 2.083c-.386.669-.823 1.337-1.26 2.006a35.293 35.293 0 01-4.682 0 28.695 28.695 0 01-1.26-2.006 27.106 27.106 0 01-1.106-2.083zm10.057-1.389l-.694-1.286c-.257-.437-.489-.849-.772-1.26.797.103 1.543.232 2.263.386-.231.72-.489 1.44-.797 2.161zm0 2.778c.309.72.566 1.44.797 2.135-.72.154-1.466.283-2.263.386.257-.412.514-.823.772-1.26.232-.386.463-.823.694-1.26zm.591 8.925c-.206.129-.463.18-.746.18-1.26 0-2.829-1.029-4.372-2.572a26.868 26.868 0 002.186-2.701 23.619 23.619 0 003.447-.54c.129.463.206.926.283 1.389.36 2.186.077 3.755-.797 4.244zm1.338-13.555c2.881.823 4.604 2.083 4.604 3.241 0 1.003-1.183 2.006-3.266 2.804-.412.154-.874.309-1.337.437a27.01 27.01 0 00-1.26-3.241c.514-1.106.952-2.186 1.26-3.241zm-2.058-7.253c.283 0 .514.051.746.18.849.489 1.157 2.032.797 4.244-.077.437-.18.9-.283 1.389a33.072 33.072 0 00-3.447-.54 23.774 23.774 0 00-2.186-2.701c1.543-1.518 3.112-2.572 4.372-2.572zm-3.781 5.17c-.463-.026-.952-.026-1.44-.026s-.977 0-1.44.026c.463-.617.952-1.183 1.44-1.723.489.54.977 1.132 1.44 1.723zm-7.382-4.99c.206-.129.463-.18.746-.18 1.26 0 2.829 1.029 4.372 2.572a26.756 26.756 0 00-2.186 2.701 23.619 23.619 0 00-3.447.54c-.129-.463-.206-.926-.283-1.389-.36-2.186-.077-3.729.797-4.244zM9.643 19.228c-2.881-.823-4.604-2.083-4.604-3.241 0-1.003 1.183-2.006 3.266-2.803.412-.154.874-.309 1.337-.437a27.01 27.01 0 001.26 3.241c-.514 1.106-.952 2.212-1.26 3.241zm.54 2.829c.077-.437.18-.9.283-1.389 1.08.232 2.238.412 3.447.54a23.774 23.774 0 002.186 2.701c-1.543 1.517-3.112 2.572-4.372 2.572-.283 0-.514-.051-.746-.18-.875-.489-1.157-2.058-.797-4.244z"
            />
        </svg>
    )
}

// icon:link | Ant Design Icons https://ant.design/components/icon/ | Ant Design

export const IconLink: TIcon = (props) => {
    return (
        <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z" />
        </svg>
    )
}

// icon:astro | Simple Icons https://simpleicons.org | SimpleIcons.org

export const IconAstro: TIcon = (props) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M16.074 16.86c-.72.616-2.157 1.035-3.812 1.035-2.032 0-3.735-.632-4.187-1.483-.161.488-.198 1.046-.198 1.402 0 0-.106 1.75 1.111 2.968 0-.632.513-1.145 1.145-1.145 1.083 0 1.082.945 1.081 1.712v.069c0 1.164.711 2.161 1.723 2.582a2.347 2.347 0 01-.236-1.029c0-1.11.652-1.523 1.41-2.003.602-.383 1.272-.807 1.733-1.66a3.129 3.129 0 00.378-1.494 3.14 3.14 0 00-.148-.954zM15.551.6c.196.244.296.572.496 1.229l4.368 14.347a18.18 18.18 0 00-5.222-1.768L12.35 4.8a.37.37 0 00-.71.002l-2.81 9.603a18.175 18.175 0 00-5.245 1.771L7.974 1.827c.2-.656.3-.984.497-1.227a1.613 1.613 0 01.654-.484C9.415 0 9.757 0 10.443 0h3.135c.686 0 1.03 0 1.32.117A1.614 1.614 0 0115.55.6z" />
        </svg>
    )
}

// icon:console-line | Material Design Icons https://materialdesignicons.com/ | Austin Andrews

export const IconConsoleLine: TIcon = (props) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M13 19v-3h8v3h-8m-4.5-6L2.47 7h4.24l4.96 4.95c.58.59.58 1.55 0 2.12L6.74 19H2.5l6-6z" />
        </svg>
    )
}

// icon:axios | Simple Icons https://simpleicons.org | SimpleIcons.org

export const IconAxios: TIcon = (props) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M11.068 2.9v19.397L8.954 24V7.864H4.975L11.068 2.9zM14.934 0v15.767h4.091l-6.2 5.089V1.469L14.935 0z" />
        </svg>
    )
}

// icon:playwright | Simple Icons https://simpleicons.org | SimpleIcons.org

export const IconPlaywright: TIcon = (props) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M23.996 7.462c-.056.837-.257 2.135-.716 3.85-.995 3.715-4.27 10.874-10.42 9.227-6.15-1.65-5.407-9.487-4.412-13.201.46-1.716.934-2.94 1.305-3.694.42-.853.846-.289 1.815.523.684.573 2.41 1.791 5.011 2.488 2.601.697 4.706.506 5.583.352 1.245-.219 1.897-.494 1.834.455zm-9.807 3.863s-.127-1.819-1.773-2.286c-1.644-.467-2.613 1.04-2.613 1.04zm4.058 4.539l-7.769-2.172s.446 2.306 3.338 3.153c2.862.836 4.43-.98 4.43-.981zm2.701-2.51s-.13-1.818-1.773-2.286c-1.644-.469-2.612 1.038-2.612 1.038zM8.57 18.23c-4.749 1.279-7.261-4.224-8.021-7.08C.197 9.831.044 8.832.003 8.188c-.047-.73.455-.52 1.415-.354.677.118 2.3.261 4.308-.28a11.28 11.28 0 002.41-.956c-.058.197-.114.4-.17.61-.433 1.618-.827 4.055-.632 6.426-1.976.732-2.267 2.423-2.267 2.423l2.524-.715c.227 1.002.6 1.987 1.15 2.838a5.914 5.914 0 01-.171.049zm-4.188-6.298c1.265-.333 1.363-1.631 1.363-1.631l-3.374.888s.745 1.076 2.01.743z" />
        </svg>
    )
}


// icon:bxl-firebase | Boxicons https://boxicons.com/ | Atisa
export const IconBxlFirebase: TIcon = (props) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M5.239 15.063L7.21 2.381a.453.453 0 01.847-.145l2.12 3.979-4.938 8.848zM19.24 18.14L17.363 6.469a.454.454 0 00-.766-.246L4.76 18.14l6.55 3.691c.411.23.912.23 1.323 0l6.607-3.691zM13.917 7.955L12.4 5.052a.452.452 0 00-.8 0L4.939 16.989l8.978-9.034z" />
        </svg>
    )
}

// icon:i18next | Simple Icons https://simpleicons.org | SimpleIcons.org

export const IconI18next: TIcon = (props) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M14.936 2.487v4.517l5.076 13.036s1.55 3.184-2.882 3.96H7.02s-4.132-.431-3.141-3.702L9.213 7.004V2.487h5.723zm2.09 13.108c-4.43-1.374-8.155-.637-9.975-.079l-1.836 4.419c-.783 2.499 2.273 2.941 2.597 2.98l.028.004h8.444c3.54-.598 2.511-2.972 2.415-3.177l-.007-.014-1.666-4.133zm-7.814.777c.79 0 1.43.386 1.43.865 0 .476-.64.864-1.43.864-.788 0-1.427-.388-1.427-.864 0-.479.639-.865 1.427-.865zm5.084 0c.787 0 1.427.386 1.427.865 0 .476-.64.864-1.427.864-.79 0-1.429-.388-1.429-.864 0-.479.638-.865 1.43-.865zm-4.5-5.213c-.552 0-1 .54-1 1.205 0 .666.448 1.205 1 1.205s1-.54 1-1.205c0-.666-.448-1.205-1-1.205zm3.641-1.297c-.655 0-1.186.638-1.186 1.43 0 .786.531 1.426 1.186 1.426.653 0 1.187-.64 1.187-1.427 0-.79-.533-1.429-1.187-1.429zm6.037-2.738s-2.122 1.546-4.086-.42V4.556s2.724-.6 4.086 2.568zm-14.844 0c1.36-3.168 4.085-2.568 4.085-2.568v2.148c-1.965 1.966-4.085.42-4.085.42zM15.044 0c.495 0 .895.439.895.981s-.4.98-.895.98h-6.09c-.492 0-.894-.438-.894-.98S8.461 0 8.955 0h6.089z" />
        </svg>
    )
}


// icon:js | Fontawesome https://fontawesome.com/ | Fontawesome

export const IconJS: TIcon = (props) => {
    return (
        <svg
            viewBox="0 0 448 512"
            fill="currentColor"
            {...props}
        >
            <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
        </svg>
    )
}

export const IconMillion: TIcon = (props) => (
    <svg
        fill="none"
        viewBox="0 0 566 119"
        {...props}
    >
        <path
            fill="url(#a)"
            fillRule="evenodd"
            d="M43.286 100.407c7.711-11.038 23.404-18.594 41.508-18.594 18.104 0 33.797 7.556 41.508 18.594C118.591 111.444 102.898 119 84.794 119c-18.104 0-33.797-7.556-41.508-18.593Z"
            className={props.className}
            clipRule="evenodd"
        />
        <path
            fill="url(#b)"
            d="M43.006 18.396C50.712 7.476 66.395 0 84.487 0c18.093 0 33.776 7.476 41.482 18.396-7.706 10.92-23.389 18.396-41.482 18.396-18.092 0-33.775-7.476-41.481-18.396Z"
            className={props.className}
        />
        <path
            fill="url(#c)"
            d="M85.28 59.718C74.068 70.546 58.862 76.63 43.006 76.63c-15.856 0-31.062-6.084-42.274-16.912l42.274-41.322L85.28 59.718Z"
            className={props.className}
        />
        <path
            fill="url(#d)"
            d="M168.344 59.738C157.132 70.567 141.925 76.65 126.07 76.65c-15.856 0-31.063-6.083-42.274-16.912l42.274-41.342 42.274 41.342Z"
            className={props.className}
        />
        <defs className={props.className}>
            <radialGradient
                id="a"
                cx={0}
                cy={0}
                r={1}
                className={props.className}
                gradientTransform="matrix(-.59712 11.99875 -26.7461 -1.33103 84.794 100.406)"
                gradientUnits="userSpaceOnUse"
            >
                <stop className={props.className} stopColor="#845CE7" />
                <stop className={props.className} offset={1} stopColor="#AF73D8" />
            </radialGradient>
            <radialGradient
                id="b"
                cx={0}
                cy={0}
                r={1}
                className={props.className}
                gradientTransform="matrix(-1.20562 24.73213 -54.00677 -2.63268 84.538 38.325)"
                gradientUnits="userSpaceOnUse"
            >
                <stop className={props.className} stopColor="#845CE7" />
                <stop className={props.className} offset={1} stopColor="#AF73D8" />
            </radialGradient>
            <radialGradient
                id="c"
                cx={0}
                cy={0}
                r={1}
                className={props.className}
                gradientTransform="matrix(-1.20562 24.73213 -54.00677 -2.63268 84.538 38.325)"
                gradientUnits="userSpaceOnUse"
            >
                <stop className={props.className} stopColor="#845CE7" />
                <stop className={props.className} offset={1} stopColor="#AF73D8" />
            </radialGradient>
            <radialGradient
                id="d"
                cx={0}
                cy={0}
                r={1}
                className={props.className}
                gradientTransform="matrix(-1.20562 24.73213 -54.00677 -2.63268 84.538 38.325)"
                gradientUnits="userSpaceOnUse"
            >
                <stop className={props.className} stopColor="#845CE7" />
                <stop className={props.className} offset={1} stopColor="#AF73D8" />
            </radialGradient>
        </defs>
    </svg>
)

export const IconSWR: TIcon = (props) => (
    <svg
        height={12}
        fill="none"
        viewBox="0 0 291 69"
        {...props}
    >
        <path
            fill="currentColor"
            d="M0 36.53c.07 17.6 14.4 32.01 32.01 32.01a32.05 32.05 0 0 0 32.01-32V32a13.2 13.2 0 0 1 23.4-8.31h20.7A32.07 32.07 0 0 0 77.2 0a32.05 32.05 0 0 0-32 32.01v4.52A13.2 13.2 0 0 1 32 49.71a13.2 13.2 0 0 1-13.18-13.18 3.77 3.77 0 0 0-3.77-3.77H3.76A3.77 3.77 0 0 0 0 36.53zm122.49 32.01a32.14 32.14 0 0 1-30.89-23.7h20.67a13.16 13.16 0 0 0 23.4-8.3V32a32.05 32.05 0 0 1 32.01-32c17.43 0 31.64 14 32 31.33l.1 5.2a13.2 13.2 0 0 0 23.4 8.31h20.7a32.07 32.07 0 0 1-30.91 23.7c-17.61 0-31.94-14.42-32.01-32l-.1-4.7v-.2a13.2 13.2 0 0 0-13.18-12.81 13.2 13.2 0 0 0-13.18 13.18v4.52a32.05 32.05 0 0 1-32.01 32.01zM247.94 23.7a13.16 13.16 0 0 1 23.4 8.31 3.77 3.77 0 0 0 3.77 3.77h11.3a3.77 3.77 0 0 0 3.76-3.77A32.05 32.05 0 0 0 258.16 0a32.07 32.07 0 0 0-30.92 23.7h20.7z"
        />
    </svg>
)

// icon:mui | Simple Icons https://simpleicons.org | SimpleIcons.org

export const IconMui: TIcon = (props) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M20.229 15.793a.666.666 0 00.244-.243.666.666 0 00.09-.333l.012-3.858a.666.666 0 01.09-.333.666.666 0 01.245-.243L23 9.58a.667.667 0 01.333-.088.667.667 0 01.333.09.667.667 0 01.244.243.666.666 0 01.089.333v7.014a.667.667 0 01-.335.578l-7.893 4.534a.666.666 0 01-.662 0l-6.194-3.542a.667.667 0 01-.246-.244.667.667 0 01-.09-.335v-3.537c0-.004.004-.006.008-.004s.008 0 .008-.005v-.004c0-.003.002-.005.004-.007l5.102-2.93c.004-.003.002-.01-.003-.01a.005.005 0 01-.004-.002.005.005 0 01-.001-.004l.01-3.467a.667.667 0 00-.333-.58.667.667 0 00-.667 0L8.912 9.799a.667.667 0 01-.665 0l-3.804-2.19a.667.667 0 00-.999.577v6.267a.667.667 0 01-.332.577.666.666 0 01-.332.09.667.667 0 01-.333-.088L.336 13.825a.667.667 0 01-.246-.244.667.667 0 01-.09-.336L.019 2.292a.667.667 0 01.998-.577l7.23 4.153a.667.667 0 00.665 0l7.228-4.153a.666.666 0 01.333-.088.666.666 0 01.333.09.667.667 0 01.244.244.667.667 0 01.088.333V13.25c0 .117-.03.232-.089.334a.667.667 0 01-.245.244l-3.785 2.18a.667.667 0 00-.245.245.666.666 0 00-.089.334.667.667 0 00.09.334.666.666 0 00.247.244l2.088 1.189a.67.67 0 00.33.087.667.667 0 00.332-.089l4.457-2.56zm.438-9.828a.666.666 0 00.09.335.666.666 0 00.248.244.667.667 0 00.67-.008l2.001-1.2a.666.666 0 00.237-.243.667.667 0 00.087-.329V2.32a.667.667 0 00-.091-.335.667.667 0 00-.584-.33.667.667 0 00-.334.094l-2 1.2a.666.666 0 00-.238.243.668.668 0 00-.086.329v2.445z" />
        </svg>
    )
}


// icon:code-json | Material Design Icons https://materialdesignicons.com/ | Austin Andrews
export const IconCodeJson: TIcon = (props) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M5 3h2v2H5v5a2 2 0 01-2 2 2 2 0 012 2v5h2v2H5c-1.07-.27-2-.9-2-2v-4a2 2 0 00-2-2H0v-2h1a2 2 0 002-2V5a2 2 0 012-2m14 0a2 2 0 012 2v4a2 2 0 002 2h1v2h-1a2 2 0 00-2 2v4a2 2 0 01-2 2h-2v-2h2v-5a2 2 0 012-2 2 2 0 01-2-2V5h-2V3h2m-7 12a1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1m-4 0a1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1m8 0a1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1z" />
        </svg>
    )
}

// icon:nextjs | Teeny Icons https://teenyicons.com/ | Anja van Staden

export const IconNextjs: TIcon = (props) => {
    return (
        <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" {...props}>
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M0 7.5a7.5 7.5 0 1111.697 6.216L4.907 4.21A.5.5 0 004 4.5V12h1V6.06l5.83 8.162A7.5 7.5 0 010 7.5zM10 10V4h1v6h-1z"
                clipRule="evenodd"
            />
        </svg>
    )
}

// icon:reacthookform | Simple Icons https://simpleicons.org | SimpleIcons.org
export const IconReacthookform: TIcon = (props) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M10.775 17.348H5.806a.281.281 0 100 .563h4.97a.281.281 0 100-.563zm7.32 0h-4.969a.281.281 0 100 .563h4.969a.281.281 0 000-.563zm-7.334-6.475H5.807a.281.281 0 100 .563h4.954a.281.281 0 100-.563zm7.32 0h-4.955a.281.281 0 100 .563h4.955a.281.281 0 000-.563zm.552-9.2h-4.341a2.404 2.404 0 00-4.58 0H5.366a3.097 3.097 0 00-3.096 3.096v16.134A3.097 3.097 0 005.367 24h13.266a3.097 3.097 0 003.096-3.097V4.77a3.097 3.097 0 00-3.096-3.096zm-8.705.563a.281.281 0 00.281-.223 1.841 1.841 0 013.598 0 .281.281 0 00.282.223h1.514V4.08a.845.845 0 01-.844.844H9.255a.845.845 0 01-.844-.844V2.236zm11.238 18.667c0 1.4-1.134 2.534-2.533 2.534H5.367a2.534 2.534 0 01-2.533-2.534V4.77c0-1.399 1.134-2.533 2.533-2.533h2.48V4.08c0 .777.63 1.407 1.408 1.407h5.49c.777 0 1.407-.63 1.407-1.407V2.236h2.48c1.4 0 2.534 1.134 2.534 2.533z" />
        </svg>
    )
}

// icon:reactrouter | Simple Icons https://simpleicons.org | SimpleIcons.org
export const IconReactrouter: TIcon = (props) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M12.118 5.466a2.306 2.306 0 00-.623.08c-.278.067-.702.332-.953.583-.41.423-.49.609-.662 1.469-.08.423.41 1.43.847 1.734.45.317 1.085.502 2.065.608 1.429.16 1.84.636 1.84 2.197 0 1.377-.385 1.747-1.96 1.906-1.707.172-2.58.834-2.765 2.117-.106.781.41 1.76 1.125 2.091 1.627.768 3.15-.198 3.467-2.196.211-1.284.622-1.642 1.998-1.747 1.588-.133 2.409-.675 2.713-1.787.278-1.02-.304-2.157-1.297-2.554-.264-.106-.873-.238-1.35-.291-1.495-.16-1.879-.424-2.038-1.39-.225-1.337-.317-1.562-.794-2.09a2.174 2.174 0 00-1.613-.73zm-4.785 4.36a2.145 2.145 0 00-.497.048c-1.469.318-2.17 2.051-1.35 3.295 1.178 1.774 3.944.953 3.97-1.177.012-1.193-.98-2.143-2.123-2.166zM2.089 14.19a2.22 2.22 0 00-.427.052c-2.158.476-2.237 3.626-.106 4.182.53.145.582.145 1.111.013 1.191-.318 1.866-1.456 1.549-2.607-.278-1.02-1.144-1.664-2.127-1.64zm19.824.008c-.233.002-.477.058-.784.162-1.39.477-1.866 2.092-.98 3.336.557.794 1.96 1.058 2.82.516 1.416-.874 1.363-3.057-.093-3.746-.38-.186-.663-.271-.963-.268z" />
        </svg>
    )
}

// icon:typescript | Simple Icons https://simpleicons.org | SimpleIcons.org
export const IconTypescript: TIcon = (props) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 00-.623.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 01-1.012 1.085 4.38 4.38 0 01-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 01-1.84-.164 5.544 5.544 0 01-1.512-.493v-2.63a5.033 5.033 0 003.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 00-.074-1.089 2.12 2.12 0 00-.537-.5 5.597 5.597 0 00-.807-.444 27.72 27.72 0 00-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 011.47-.629 7.536 7.536 0 011.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
        </svg>
    )
}

// icon:diamond | Tabler Icons https://tablericons.com/ | Csaba Kissi
export const IconDiamond: TIcon = (props) => {
    return (
        <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            {...props}
        >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M6 5h12l3 5-8.5 9.5a.7.7 0 01-1 0L3 10l3-5" />
            <path d="M10 12L8 9.8l.6-1" />
        </svg>
    )
}

// icon:bell | Bootstrap https://icons.getbootstrap.com/ | Bootstrap
export const IconBell: TIcon = (props) => {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M8 16a2 2 0 002-2H6a2 2 0 002 2zM8 1.918l-.797.161A4.002 4.002 0 004 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 00-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 111.99 0A5.002 5.002 0 0113 6c0 .88.32 4.2 1.22 6z" />
        </svg>
    )
}

// icon:ship-wheel | Material Design Icons https://materialdesignicons.com/ | Austin Andrews
export const IconShipWheel: TIcon = (props) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M2 11l2.05.1a7.96 7.96 0 013.2-5.54L6.13 3.84c-.27-.48-.13-1.09.37-1.37.5-.27 1.09-.11 1.37.37l.93 1.82a8.102 8.102 0 016.4 0l.93-1.82c.28-.48.87-.64 1.37-.37.5.28.64.89.37 1.37l-1.12 1.72a7.96 7.96 0 013.2 5.54L22 11a1 1 0 011 1 1 1 0 01-1 1l-2.05-.1a7.96 7.96 0 01-3.2 5.54l1.12 1.72c.27.48.13 1.09-.37 1.37-.5.27-1.09.11-1.37-.37l-.93-1.82a8.102 8.102 0 01-6.4 0l-.93 1.82c-.28.48-.87.64-1.37.37-.5-.28-.64-.89-.37-1.37l1.12-1.72a7.96 7.96 0 01-3.2-5.54L2 13a1 1 0 01-1-1 1 1 0 011-1m7.07.35c.13-.61.46-1.15.93-1.56L8.34 7.25a5.993 5.993 0 00-2.29 3.95l3.02.15M12 9c.32 0 .62.05.9.14l1.38-2.69C13.58 6.16 12.81 6 12 6c-.81 0-1.58.16-2.28.45l1.38 2.69c.28-.09.58-.14.9-.14m2.93 2.35l3.02-.15a5.993 5.993 0 00-2.29-3.95L14 9.79c.47.41.8.95.93 1.56m0 1.3c-.13.61-.46 1.15-.93 1.56l1.66 2.54a5.993 5.993 0 002.29-3.95l-3.02-.15M12 15c-.32 0-.62-.05-.91-.14l-1.37 2.69c.7.29 1.47.45 2.28.45.81 0 1.58-.16 2.28-.45l-1.37-2.69c-.29.09-.59.14-.91.14m-2.93-2.35l-3.02.15c.22 1.6 1.06 3.01 2.29 3.95L10 14.21c-.47-.41-.8-.95-.93-1.56z" />
        </svg>
    )
}

// icon:info-circle | Ant Design Icons https://ant.design/components/icon/ | Ant Design
export const IconInfoCircle: TIcon = (props) => {
    return (
        <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
            <path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" />
        </svg>
    )
}

// icon:close | Ionicons https://ionicons.com/ | Ionic Framework
export const IconClose: TIcon = (props) => {
    return (
        <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
        </svg>
    )
}

// icon:play-circle | Ant Design Icons https://ant.design/components/icon/ | Ant Design
export const IconPlayCircle: TIcon = (props) => {
    return (
        <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 01-12.7-6.5V353.7a8 8 0 0112.7-6.5L656.1 506a7.9 7.9 0 010 12.9z" />
        </svg>
    )
}

// icon:play-skip-back | Ionicons https://ionicons.com/ | Ionic Framework
export const IconPlaySkipBack: TIcon = (props) => {
    return (
        <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M112 64a16 16 0 0116 16v136.43L360.77 77.11a35.13 35.13 0 0135.77-.44c12 6.8 19.46 20 19.46 34.33v290c0 14.37-7.46 27.53-19.46 34.33a35.14 35.14 0 01-35.77-.45L128 295.57V432a16 16 0 01-32 0V80a16 16 0 0116-16z" />
        </svg>
    )
}

// icon:play-skip-forward | Ionicons https://ionicons.com/ | Ionic Framework
export const IconPlaySkipForward: TIcon = (props) => {
    return (
        <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M400 64a16 16 0 00-16 16v136.43L151.23 77.11a35.13 35.13 0 00-35.77-.44C103.46 83.47 96 96.63 96 111v290c0 14.37 7.46 27.53 19.46 34.33a35.14 35.14 0 0035.77-.45L384 295.57V432a16 16 0 0032 0V80a16 16 0 00-16-16z" />
        </svg>
    )
}


// icon:pause-circle | Ant Design Icons https://ant.design/components/icon/ | Ant Design
export const IconPauseCircle: TIcon = (props) => {
    return (
        <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-80 600c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304zm224 0c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304z" />
        </svg>
    )
}

// icon:window-minimize | Material Design Icons https://materialdesignicons.com/ | Austin Andrews
export const IconWindowMinimize: TIcon = (props) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M20 14H4v-4h16" />
        </svg>
    )
}

// icon:bxs-chevron-up | Boxicons https://boxicons.com/ | Atisa
export const IconBxsChevronUp: TIcon = (props) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M12 6.879l-7.061 7.06 2.122 2.122L12 11.121l4.939 4.94 2.122-2.122z" />
        </svg>
    )
}


// icon:volume-high | Ionicons https://ionicons.com/ | Ionic Framework
export const IconVolumeHigh: TIcon = (props) => {
    return (
        <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M232 416a23.88 23.88 0 01-14.2-4.68 8.27 8.27 0 01-.66-.51L125.76 336H56a24 24 0 01-24-24V200a24 24 0 0124-24h69.75l91.37-74.81a8.27 8.27 0 01.66-.51A24 24 0 01256 120v272a24 24 0 01-24 24zm-106.18-80zm-.27-159.86zM320 336a16 16 0 01-14.29-23.19c9.49-18.87 14.3-38 14.3-56.81 0-19.38-4.66-37.94-14.25-56.73a16 16 0 0128.5-14.54C346.19 208.12 352 231.44 352 256c0 23.86-6 47.81-17.7 71.19A16 16 0 01320 336z" />
            <path d="M368 384a16 16 0 01-13.86-24C373.05 327.09 384 299.51 384 256c0-44.17-10.93-71.56-29.82-103.94a16 16 0 0127.64-16.12C402.92 172.11 416 204.81 416 256c0 50.43-13.06 83.29-34.13 120a16 16 0 01-13.87 8z" />
            <path d="M416 432a16 16 0 01-13.39-24.74C429.85 365.47 448 323.76 448 256c0-66.5-18.18-108.62-45.49-151.39a16 16 0 1127-17.22C459.81 134.89 480 181.74 480 256c0 64.75-14.66 113.63-50.6 168.74A16 16 0 01416 432z" />
        </svg>
    )
}

// icon:volume-medium | Ionicons https://ionicons.com/ | Ionic Framework

export const IconVolumeMedium: TIcon = (props) => {
    return (
        <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M264 416.19a23.92 23.92 0 01-14.21-4.69l-.66-.51-91.46-75H88a24 24 0 01-24-24V200a24 24 0 0124-24h69.65l91.46-75 .66-.51A24 24 0 01288 119.83v272.34a24 24 0 01-24 24zM352 336a16 16 0 01-14.29-23.18c9.49-18.9 14.3-38 14.3-56.82 0-19.36-4.66-37.92-14.25-56.73a16 16 0 0128.5-14.54C378.2 208.16 384 231.47 384 256c0 23.83-6 47.78-17.7 71.18A16 16 0 01352 336z" />
            <path d="M400 384a16 16 0 01-13.87-24C405 327.05 416 299.45 416 256c0-44.12-10.94-71.52-29.83-103.95A16 16 0 01413.83 136C434.92 172.16 448 204.88 448 256c0 50.36-13.06 83.24-34.12 120a16 16 0 01-13.88 8z" />
        </svg>
    )
}

// icon:volume-low | Ionicons https://ionicons.com/ | Ionic Framework
export const IconVolumeLow: TIcon = (props) => {
    return (
        <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M296 416.19a23.92 23.92 0 01-14.21-4.69l-.66-.51-91.46-75H120a24 24 0 01-24-24V200a24 24 0 0124-24h69.65l91.46-75 .66-.51A24 24 0 01320 119.83v272.34a24 24 0 01-24 24zM384 336a16 16 0 01-14.29-23.18c9.49-18.9 14.3-38 14.3-56.82 0-19.36-4.66-37.92-14.25-56.73a16 16 0 0128.5-14.54C410.2 208.16 416 231.47 416 256c0 23.83-6 47.78-17.7 71.18A16 16 0 01384 336z" />
        </svg>
    )
}

// icon:volume-off | Ionicons https://ionicons.com/ | Ionic Framework
export const IconVolumeOff: TIcon = (props) => {
    return (
        <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M344 416a23.92 23.92 0 01-14.21-4.69c-.23-.16-.44-.33-.66-.51l-91.46-74.9H168a24 24 0 01-24-24V200.07a24 24 0 0124-24h69.65l91.46-74.9c.22-.18.43-.35.66-.51A24 24 0 01368 120v272a24 24 0 01-24 24z" />
        </svg>
    )
}
