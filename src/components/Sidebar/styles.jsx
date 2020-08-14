export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '0px',
    paddingLeft: '10px',
    paddingRight: '10px',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  listItem: {
    marginTop: '30px',
     padding: '8px 0px',
    justifyContent: 'center',
   },
  activeListItem: {
    backgroundColor: '#ffffff',
    boxShadow: '0px 3px 30px #0000000F',
  },
});
