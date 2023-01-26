import React from 'react';
import {Link} from "react-router-dom";
import ButtonMailTo from "./UI/button/ButtonMailTo";
import '../styles/components/Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="logo">
                    <svg width="145px" height="27" viewBox="0 0 144 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.519628 21V6.27273H4.97808V8.97656H5.14108C5.4479 8.08168 5.96565 7.37535 6.69434 6.8576C7.42304 6.33984 8.29236 6.08097 9.3023 6.08097C10.325 6.08097 11.2007 6.34304 11.9294 6.86719C12.6581 7.39134 13.1215 8.09446 13.3197 8.97656H13.4731C13.748 8.10085 14.2849 7.40092 15.0839 6.87678C15.8829 6.34624 16.8257 6.08097 17.9124 6.08097C19.3059 6.08097 20.4372 6.52841 21.3066 7.42329C22.1759 8.31179 22.6105 9.53267 22.6105 11.0859V21H17.922V12.1598C17.922 11.4247 17.7334 10.8654 17.3563 10.4819C16.9791 10.092 16.4902 9.89702 15.8893 9.89702C15.2437 9.89702 14.7355 10.108 14.3648 10.5298C14.0005 10.9453 13.8183 11.5046 13.8183 12.2077V21H9.31189V12.1119C9.31189 11.4279 9.12652 10.8878 8.75578 10.4915C8.38504 10.0952 7.89605 9.89702 7.2888 9.89702C6.87971 9.89702 6.51856 9.99609 6.20535 10.1942C5.89214 10.386 5.64605 10.6609 5.46707 11.0188C5.29449 11.3768 5.20819 11.7987 5.20819 12.2844V21H0.519628ZM26.4926 26.5227C25.9301 26.5227 25.3995 26.478 24.9009 26.3885C24.4024 26.3054 23.9741 26.1935 23.6161 26.0529L24.6516 22.6491C25.1119 22.8026 25.5274 22.892 25.8981 22.9176C26.2752 22.9432 26.598 22.8825 26.8665 22.7354C27.1413 22.5948 27.3523 22.3423 27.4993 21.978L27.6815 21.5369L22.4464 6.27273H27.3555L30.0689 16.7812H30.2223L32.9741 6.27273H37.9119L32.3605 22.4094C32.092 23.2148 31.7117 23.9244 31.2195 24.538C30.7337 25.158 30.1041 25.6438 29.3306 25.9954C28.5636 26.3469 27.6176 26.5227 26.4926 26.5227ZM38.3597 21V1.36364H43.0483V8.79439H43.1442C43.3359 8.34695 43.6076 7.91548 43.9591 7.5C44.3171 7.08452 44.7709 6.74574 45.3206 6.48366C45.8768 6.2152 46.5415 6.08097 47.315 6.08097C48.3377 6.08097 49.2933 6.34943 50.1818 6.88636C51.0767 7.42329 51.799 8.25106 52.3487 9.36967C52.8984 10.4883 53.1733 11.9137 53.1733 13.646C53.1733 15.3143 52.908 16.7109 52.3775 17.8359C51.8533 18.9609 51.1438 19.8047 50.2489 20.3672C49.3604 20.9297 48.3728 21.2109 47.2862 21.2109C46.5447 21.2109 45.9023 21.0895 45.359 20.8466C44.8157 20.6037 44.3586 20.2841 43.9879 19.8878C43.6236 19.4915 43.3423 19.0664 43.1442 18.6126H43.0003V21H38.3597ZM42.9524 13.6364C42.9524 14.429 43.0579 15.1193 43.2688 15.7074C43.4861 16.2955 43.7961 16.7525 44.1988 17.0785C44.6079 17.3981 45.0969 17.5579 45.6658 17.5579C46.2411 17.5579 46.7301 17.3981 47.1328 17.0785C47.5355 16.7525 47.8391 16.2955 48.0437 15.7074C48.2546 15.1193 48.3601 14.429 48.3601 13.6364C48.3601 12.8437 48.2546 12.1566 48.0437 11.5749C47.8391 10.9933 47.5355 10.5426 47.1328 10.223C46.7365 9.90341 46.2475 9.74361 45.6658 9.74361C45.0905 9.74361 44.6015 9.90021 44.1988 10.2134C43.7961 10.5266 43.4861 10.9741 43.2688 11.5558C43.0579 12.1374 42.9524 12.831 42.9524 13.6364ZM61.1644 21.2781C59.624 21.2781 58.2944 20.9744 57.1758 20.3672C56.0636 19.7536 55.2071 18.881 54.6062 17.7496C54.0117 16.6119 53.7145 15.2599 53.7145 13.6939C53.7145 12.1726 54.0149 10.843 54.6158 9.70526C55.2166 8.56108 56.0636 7.67258 57.1566 7.03977C58.2497 6.40057 59.5377 6.08097 61.0206 6.08097C62.0689 6.08097 63.0277 6.24396 63.897 6.56996C64.7664 6.89595 65.5174 7.37855 66.1502 8.01776C66.7831 8.65696 67.2752 9.44638 67.6268 10.386C67.9784 11.3192 68.1541 12.3899 68.1541 13.598V14.7678H55.3541V12.0447H63.7916C63.7852 11.5462 63.6669 11.1019 63.4368 10.712C63.2067 10.3221 62.8903 10.0185 62.4876 9.80114C62.0913 9.57741 61.6343 9.46555 61.1165 9.46555C60.5924 9.46555 60.1225 9.58381 59.7071 9.82031C59.2916 10.0504 58.9624 10.3668 58.7195 10.7695C58.4766 11.1658 58.3488 11.6165 58.336 12.1214V14.8924C58.336 15.4933 58.4542 16.0206 58.6907 16.4744C58.9272 16.9219 59.2628 17.2702 59.6975 17.5195C60.1321 17.7688 60.6499 17.8935 61.2507 17.8935C61.6662 17.8935 62.0434 17.8359 62.3821 17.7209C62.7209 17.6058 63.0117 17.4364 63.2546 17.2127C63.4975 16.989 63.6797 16.7141 63.8012 16.3881L68.1062 16.5128C67.9272 17.478 67.5341 18.3185 66.9269 19.0344C66.326 19.744 65.5366 20.2969 64.5586 20.6932C63.5806 21.0831 62.4492 21.2781 61.1644 21.2781ZM73.8873 12.6009V21H69.1988V6.27273H73.6572V8.97656H73.8202C74.1462 8.07528 74.7023 7.36896 75.4885 6.8576C76.2748 6.33984 77.2112 6.08097 78.2978 6.08097C79.3334 6.08097 80.2314 6.31428 80.9921 6.78089C81.7591 7.24112 82.3536 7.88672 82.7755 8.71768C83.2037 9.54226 83.4147 10.5075 83.4083 11.6133V21H78.7197V12.5337C78.7261 11.7156 78.5184 11.0763 78.0965 10.6161C77.681 10.1559 77.1025 9.92578 76.3611 9.92578C75.8689 9.92578 75.4342 10.0344 75.0571 10.2518C74.6863 10.4627 74.3987 10.7663 74.1942 11.1626C73.996 11.5589 73.8937 12.0384 73.8873 12.6009ZM91.8357 21.2781C90.2825 21.2781 88.9497 20.9585 87.8375 20.3192C86.7317 19.68 85.8815 18.7915 85.2871 17.6538C84.6926 16.5096 84.3954 15.1864 84.3954 13.6843C84.3954 12.1758 84.6926 10.8526 85.2871 9.71484C85.8879 8.57067 86.7413 7.67898 87.8471 7.03977C88.9593 6.40057 90.2856 6.08097 91.8261 6.08097C93.1876 6.08097 94.3734 6.32706 95.3833 6.81925C96.3996 7.31143 97.1923 8.00817 97.7611 8.90945C98.3364 9.80433 98.6401 10.8558 98.672 12.0639H94.2903C94.2008 11.3097 93.9451 10.7184 93.5232 10.2901C93.1077 9.86186 92.5644 9.64773 91.8932 9.64773C91.3499 9.64773 90.8737 9.80114 90.4646 10.108C90.0555 10.4084 89.7359 10.8558 89.5058 11.4503C89.2821 12.0384 89.1702 12.767 89.1702 13.6364C89.1702 14.5057 89.2821 15.2408 89.5058 15.8416C89.7359 16.4361 90.0555 16.8867 90.4646 17.1935C90.8737 17.494 91.3499 17.6442 91.8932 17.6442C92.3279 17.6442 92.7114 17.5515 93.0438 17.3661C93.3826 17.1808 93.6606 16.9091 93.878 16.5511C94.0953 16.1868 94.2327 15.7457 94.2903 15.228H98.672C98.6273 16.4425 98.3236 17.5036 97.7611 18.4112C97.205 19.3189 96.422 20.0252 95.4121 20.5302C94.4085 21.0288 93.2164 21.2781 91.8357 21.2781ZM104.41 12.6009V21H99.7214V1.36364H104.257V8.97656H104.42C104.752 8.06889 105.295 7.35937 106.05 6.84801C106.81 6.33665 107.74 6.08097 108.84 6.08097C109.875 6.08097 110.776 6.31108 111.544 6.77131C112.311 7.22514 112.905 7.86754 113.327 8.69851C113.755 9.52947 113.966 10.5011 113.96 11.6133V21H109.271V12.5337C109.278 11.7156 109.073 11.0763 108.658 10.6161C108.242 10.1559 107.657 9.92578 106.903 9.92578C106.411 9.92578 105.976 10.0344 105.599 10.2518C105.228 10.4627 104.937 10.7663 104.726 11.1626C104.522 11.5589 104.416 12.0384 104.41 12.6009Z"
                            fill="#fff"></path>
                        <path
                            d="M118.173 21.2781C117.483 21.2781 116.892 21.0352 116.399 20.5494C115.914 20.0636 115.674 19.4755 115.68 18.7852C115.674 18.1076 115.914 17.5291 116.399 17.0497C116.892 16.5639 117.483 16.321 118.173 16.321C118.825 16.321 119.4 16.5639 119.899 17.0497C120.404 17.5291 120.66 18.1076 120.666 18.7852C120.66 19.2454 120.538 19.6641 120.302 20.0412C120.072 20.4183 119.768 20.7187 119.391 20.9425C119.02 21.1662 118.614 21.2781 118.173 21.2781ZM122.413 21V6.27273H127.102V21H122.413ZM124.762 4.55646C124.104 4.55646 123.538 4.33913 123.065 3.90447C122.592 3.46342 122.356 2.93288 122.356 2.31285C122.356 1.69922 122.592 1.17507 123.065 0.740412C123.538 0.29936 124.104 0.0788341 124.762 0.0788341C125.427 0.0788341 125.993 0.29936 126.459 0.740412C126.932 1.17507 127.169 1.69922 127.169 2.31285C127.169 2.93288 126.932 3.46342 126.459 3.90447C125.993 4.33913 125.427 4.55646 124.762 4.55646ZM135.611 21.2781C134.064 21.2781 132.734 20.9616 131.622 20.3288C130.516 19.6896 129.663 18.8011 129.062 17.6634C128.467 16.5192 128.17 15.1928 128.17 13.6843C128.17 12.1694 128.467 10.843 129.062 9.70526C129.663 8.56108 130.516 7.67258 131.622 7.03977C132.734 6.40057 134.064 6.08097 135.611 6.08097C137.157 6.08097 138.484 6.40057 139.59 7.03977C140.702 7.67258 141.555 8.56108 142.15 9.70526C142.75 10.843 143.051 12.1694 143.051 13.6843C143.051 15.1928 142.75 16.5192 142.15 17.6634C141.555 18.8011 140.702 19.6896 139.59 20.3288C138.484 20.9616 137.157 21.2781 135.611 21.2781ZM135.639 17.7401C136.202 17.7401 136.678 17.5675 137.068 17.2223C137.458 16.8771 137.755 16.3977 137.96 15.7841C138.171 15.1705 138.276 14.4609 138.276 13.6555C138.276 12.8374 138.171 12.1214 137.96 11.5078C137.755 10.8942 137.458 10.4148 137.068 10.0696C136.678 9.72443 136.202 9.55185 135.639 9.55185C135.058 9.55185 134.565 9.72443 134.163 10.0696C133.766 10.4148 133.463 10.8942 133.252 11.5078C133.047 12.1214 132.945 12.8374 132.945 13.6555C132.945 14.4609 133.047 15.1705 133.252 15.7841C133.463 16.3977 133.766 16.8771 134.163 17.2223C134.565 17.5675 135.058 17.7401 135.639 17.7401Z"
                            fill="#824FE7"></path>
                    </svg>
                </div>
                <div className="information">
                    <Link className="information-link" to="/privacy-policy">Privacy Policy</Link>
                    <Link className="information-link" to="/terms-of-service">Terms of Service</Link>
                    <ButtonMailTo
                        className="information-link"
                        label="Contact Support"
                        mailto="mailto:zombisuki@gmail.com"
                    />
                </div>
                <div className="copyright"> © mixaker 2023</div>
            </div>
        </footer>
    );
};

export default Footer;