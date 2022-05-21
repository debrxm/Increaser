import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  // OR
  // const logo = <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} />

  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
        <defs>
          <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
            <stop offset="0%" stopColor={PRIMARY_DARK} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
        </defs>

        <g fill={PRIMARY_MAIN} fillRule="evenodd" stroke="none" strokeWidth="1">
          <path
            id="Path_333"
            data-name="Path 333"
            d="M21.9,71.58A49.865,49.865,0,0,1,71.761,21.715H93.747A22.893,22.893,0,0,0,70.718,0H22.983A22.983,22.983,0,0,0,0,22.984V70.718A22.893,22.893,0,0,0,21.9,93.384Z"
            transform="translate(0 0)"
            fill="#244c5c"
          />
          <path
            id="Path_334"
            data-name="Path 334"
            d="M40.6,136.566a79.286,79.286,0,0,1,79.331-79.331H175.1V49.619a40.8,40.8,0,0,0-40.8-40.8H49.619a40.8,40.8,0,0,0-40.8,40.8v84.725a40.8,40.8,0,0,0,31.732,39.711Z"
            transform="translate(31.163 31.163)"
            fill="#39ba74"
          />
          <rect
            id="Rectangle_507"
            data-name="Rectangle 507"
            width="278.021"
            height="278.021"
            rx="15.04"
            transform="translate(94.427 111.064)"
            fill="#244c5c"
          />
          <path
            id="Path_335"
            data-name="Path 335"
            d="M76.335,65.838a13.962,13.962,0,1,1-4.073-9.9,14.007,14.007,0,0,1,4.073,9.9Z"
            transform="translate(170.724 183.126)"
            fill="#39ba74"
          />
          <path
            id="Path_336"
            data-name="Path 336"
            d="M31.42,34.92l90.664,91.752h67.409"
            transform="translate(111.013 123.38)"
            fill="none"
            stroke="#39ba74"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <line
            id="Line_69"
            data-name="Line 69"
            x1="63.691"
            y2="63.646"
            transform="translate(169.406 250.097)"
            fill="none"
            stroke="#39ba74"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
        </g>
      </svg>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
