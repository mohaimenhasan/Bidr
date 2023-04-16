import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Drawer,
  Toolbar,
  ListItemIcon,
  ListItemButton
} from '@mui/material';
import Navbar from '../Components/Navbar';
import { API, Auth } from 'aws-amplify';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HistoryIcon from '@mui/icons-material/History';

const drawerWidth = 240;

const DashboardRoot = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  minHeight: '100vh',
}));

const ListContainer = styled(Box)(({ theme }) => ({
  maxWidth: '600px',
  width: '100%',
  bgcolor: theme.palette.background.paper,
}));

const ErrorText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.error.main,
}));

function FavoriteList({ favorites }) {
  return (
    <ListContainer>
      <List>
        {favorites.map((favorite) => (
          <ListItem key={favorite.id} alignItems="flex-start">
            <ListItemText primary={favorite.listingId} secondary="Listing ID" />
          </ListItem>
        ))}
      </List>
    </ListContainer>
  );
}

function BidHistoryList({ bids }) {
  return (
    <ListContainer>
      <List>
        {bids.map((bid) => (
          <ListItem key={bid.id} alignItems="flex-start">
            <ListItemText
              primary={`${bid.property} - $${bid.biddingPrice}`}
              secondary={`Ends on ${new Date(bid.endDate).toLocaleDateString()}`}
            />
          </ListItem>
        ))}
      </List>
    </ListContainer>
  );
}

function Dashboard() {
  const [userFavorites, setUserFavorites] = useState([]);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [userBids, setUserBids] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    getUserFavorites();
    getUserBids();
  }, []);

  async function getUserFavorites() {
    setIsLoading(true);
    setError(null);
    try {
      const user = await Auth.currentAuthenticatedUser();
      const userId = user.username;

      const listFavoritesResponse = await API.graphql({
        query: `
          query ListFavorites($filter: ModelFavoriteFilterInput) {
            listFavorites(filter: $filter) {
              items {
                id
                listingId
                userId
              }
            }
          }
        `,
        variables: {
          filter: {
            userId: {
              eq: userId
            }
          }
        }
      });

      const { items: favorites } = listFavoritesResponse.data.listFavorites;
      setUserFavorites(favorites);
      setFavoritesCount(favorites.length);
    } catch (error) {
      console.log('Error retrieving user favorites:', error);
      setError('Error retrieving user favorites.');
    } finally {
      setIsLoading(false);
    }
  }

  async function getUserBids() {
    setIsLoading(true);
    setError(null);
    try {
      const user = await Auth.currentAuthenticatedUser();
      const userId = user.username;
  
      const listBidsResponse = await API.graphql({
        query: `
          query ListBids($filter: ModelBidFilterInput) {
            listBids(filter: $filter) {
              items {
                id
                property
                biddingPrice
                endDate
                userId
              }
            }
          }
        `,
        variables: {
          filter: {
            userId: {
              eq: userId
            }
          }
        }
      });
  
      const { items: bids } = listBidsResponse.data.listBids;
      setUserBids(bids);
    } catch (error) {
      console.log('Error retrieving user bids:', error);
      setError('Error retrieving user bids.');
    } finally {
      setIsLoading(false);
    }
  }
  
  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };
  
  return (
    <DashboardRoot>
        <Navbar />      
        <Box>
          <Drawer
            sx={{
              '& .MuiDrawer-paper': {
                width: drawerWidth,
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Toolbar sx={{marginTop: '10px',}}/>
            <Box sx={{ overflow: 'auto' }}>
              <List>
                {['Favorites', 'Bid History'].map((text, index) => (
                  <ListItemButton
                    key={text}
                    selected={selectedIndex === index}
                    onClick={() => handleListItemClick(index)}
                  >
                    <ListItemIcon>
                      {index === 0 ? <FavoriteIcon /> : <HistoryIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            {selectedIndex === 0 && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '80vh',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  You have {favoritesCount} favorite rental listings
                </Typography>
                {isLoading ? (
                  <CircularProgress />
                ) : error ? (
                  <ErrorText variant="body1" gutterBottom>
                    {error}
                  </ErrorText>
                ) : userFavorites.length > 0 ? (
                  <FavoriteList favorites={userFavorites} />
                ) : (
                  <Typography variant="body1" gutterBottom>
                    You haven't favorited any rental listings yet.
                  </Typography>
                )}
              </Box>
            )}
            {selectedIndex === 1 && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '80vh',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Bid History
                </Typography>
                {isLoading ? (
                  <CircularProgress />
                ) : error ? (
                  <ErrorText variant="body1" gutterBottom>
                    {error}
                  </ErrorText>
                ) : userBids.length > 0 ? (
                  <BidHistoryList bids={userBids} />
                ) : (
                  <Typography variant="body1" gutterBottom>
                    You haven't bid on any properties yet.
                  </Typography>
                )}
              </Box>
            )}
          </Box>
      </Box>
    </DashboardRoot>
  );

}


export default Dashboard;
