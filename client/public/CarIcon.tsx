import React, { FunctionComponent } from 'react';

interface CarIconProps {
    className?: string;
}

const CarIcon: FunctionComponent<CarIconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`${className}`}
        height="100" width="100"
        viewBox="0 0 1200 150"
        stroke="currentColor">
        <path d="M164.651,575.269c0.07,0.03,0.139,0.05,0.209,0.05h37.181c7.26,24.678,30.071,42.683,57.092,42.683  c27.022,0,49.833-18.004,57.082-42.683h349.077c7.25,24.678,30.061,42.683,57.082,42.683c27.022,0,49.833-18.004,57.092-42.683  h39.564c10.139,0,18.541-7.875,19.206-18.005l2.433-37.211c0.159-2.463-0.159-4.925-0.923-7.269l-9.613-29.227l4.995-27.201  c1.092-5.948-2.582-11.728-8.421-13.277l-14.141-3.745l-0.005-0.001l6.573-24.493l5.506-0.755  c14.735-2.022,25.042-15.605,23.021-30.341c-0.156-1.138-1.205-1.933-2.342-1.777l-36.194,4.966  c-14.735,2.022-25.042,15.605-23.021,30.341c0.156,1.138,1.205,1.934,2.342,1.777l14.32-1.964l-4.937,18.396  c-114.065-29.117-232.012-40.14-349.523-32.652c-6.654,0.427-13.228,1.52-19.633,3.247c-6.406,1.738-12.642,4.121-18.591,7.121  l-90.191,45.364c-8.083,4.061-16.684,7.001-25.562,8.739l-83.101,16.197c-13.158,2.572-24.867,10.03-32.742,20.875l-13.734,18.908  c-7.637,2.999-12.662,10.368-12.662,18.571v14.479C152.088,564.634,157.044,572.081,164.651,575.269z M789.158,502.835l3.843-9.901  c0.467-1.192,1.43-2.116,2.642-2.533l16.783-5.76c2.393-0.824,4.995,0.576,5.621,3.039l3.814,14.996  c0.685,2.701-1.311,5.332-4.092,5.412l-24.45,0.665C790.22,508.843,788.026,505.734,789.158,502.835z M757.052,558.506  c0,6.098-1.589,11.828-4.37,16.813c-5.919,10.646-17.279,17.856-30.308,17.856c-13.019,0-24.38-7.21-30.309-17.856  c-2.781-4.985-4.36-10.715-4.36-16.813c0-19.126,15.552-34.678,34.668-34.678C741.5,523.828,757.052,539.38,757.052,558.506z   M644.158,425.742l37.449,5.343c9.236,1.311,17.607,6.107,23.407,13.397c1.669,2.095,0.069,5.174-2.602,4.995l-32.613-2.065  c-10.795-0.685-20.735-6.117-27.131-14.846l-1.43-1.946C639.62,428.413,641.457,425.354,644.158,425.742z M626.542,499.378  l-11.51,30.577c-3.803,10.13-11.907,18.044-22.126,21.62l-2.284,0.794c-2.582,0.904-4.965-1.748-3.813-4.22l16.058-34.261  c3.953-8.432,10.983-15.045,19.653-18.462C625.012,494.443,627.485,496.876,626.542,499.378z M330.932,480.848l0.109-0.06  l90.191-45.364c8.977-4.518,18.62-7.13,28.65-7.766c23.159-1.48,46.675-2.225,69.883-2.225c18.719,0,37.419,0.487,56.099,1.44  c7.289,0.378,14.251,3.158,19.782,7.935c15.551,13.446,31.302,29.614,29.762,38.869c-2.88,17.25-266.622,19.703-285.003,19.852  c-0.665,0.01-1.321-0.119-1.946-0.367l-7.11-2.831C327.168,488.673,326.92,482.864,330.932,480.848z M259.132,523.828  c19.117,0,34.669,15.552,34.669,34.678c0,6.098-1.589,11.828-4.37,16.813c-5.919,10.646-17.28,17.856-30.299,17.856  c-13.029,0-24.39-7.21-30.318-17.856c-2.781-4.985-4.36-10.715-4.36-16.813C224.454,539.38,240.005,523.828,259.132,523.828z   M184.959,521.425l14.271-17.796c0.258-0.318,0.616-0.526,1.022-0.596l31.501-5.373c1.718-0.297,2.671,1.907,1.291,2.959  l-22.642,17.21c-0.179,0.139-0.378,0.238-0.586,0.288l-23.149,5.958C185.128,524.474,183.956,522.667,184.959,521.425z"/><path d="M259.132,571.575c7.22,0,13.069-5.849,13.069-13.069c0-7.22-5.849-13.079-13.069-13.079  c-7.22,0-13.079,5.859-13.079,13.079C246.053,565.726,251.912,571.575,259.132,571.575z"/><path d="M722.373,571.575c7.229,0,13.079-5.849,13.079-13.069c0-7.22-5.849-13.079-13.079-13.079  c-7.22,0-13.069,5.859-13.069,13.079C709.304,565.726,715.154,571.575,722.373,571.575z" />
    </svg>
);

export default CarIcon;