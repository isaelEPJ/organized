import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { colors } from '../../../assets/colors';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rootUI: {
            flexGrow: 1,
            width: '100%',
            position: 'fixed',
            background: colors.organge1,
            marginRight: theme.spacing(3),
            display: 'flex',
        },
        menuButton: {
            color: colors.organge1,
            margin: '0 2rem 0 0',
        },
        IconButtons: {
            margin: 'auto 0 auto auto',
        },
        link: {
            // font:16px Roboto, sans-serif;
            textDecoration: 'none',
            font: `20px Roboto, sans-serif`,
            padding: '20px',
            width: '20px',
            color: colors.blue1,
            marginLeft: '3rem',
        },

        title: {
            flexGrow: 1,
        },
    }),
);
