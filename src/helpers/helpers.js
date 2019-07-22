import { toast } from 'react-toastify';
import Joi from 'joi-browser';
import jwtDecode from 'jwt-decode';

class Helpers {
  static setToken(token) {
    if (localStorage.token) {
      localStorage.removeItem('token');
    }
    localStorage.setItem('token', token);
  }
  static getUserInfoFromToken() {
    let user = {};
    const token = localStorage.token;
    if (token) {
      const decoded = jwtDecode(token);
      const { id, username, firstName, lastName, email, image, bio } = decoded;
      user = { id, username, firstName, lastName, email, image, bio };
    }
    return user;
  }
  static setAlertError(message) {
    toast.error(message, {
      toastId: 13
    });
  }
  static setAlertInfo(message) {
    toast.info(message, {
      toastId: 13
    });
  }

  static validate = (data, schema) => {
    const { error } = Joi.validate(data, schema, {
      abortEarly: false
    });
    if (!error) return null;
    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };
  static didILikeIt = info => {
    const allAuthor = info.likes.likes;
    if (allAuthor) {
      const user = Helpers.getUserInfoFromToken();
      for (let i = 0; i < allAuthor.length; i++) {
        if (user.username === allAuthor[i].author.username) {
          return true;
        }
      }
    }
    return false;
  };
  static didIDislikeIt = info => {
    const allAuthor = info.dislikes.dislikes;
    if (allAuthor) {
      const user = Helpers.getUserInfoFromToken();
      for (let i = 0; i < allAuthor.length; i++) {
        if (user.username === allAuthor[i].author.username) {
          return true;
        }
      }
    }
    return false;
  };

  static searchArticles(allArticles, search) {
    let findByTitle = [],
      findByAuthor = [];
    if (search) {
      findByTitle = allArticles.filter(article =>
        article.title.toLowerCase().startsWith(search.toLowerCase())
      );
      findByAuthor = allArticles.filter(article =>
        article.author.username.toLowerCase().startsWith(search.toLowerCase())
      );
    }
    const allSearches = [
      {
        title: 'Found by title',
        values: findByTitle
      },
      {
        title: 'Found by author',
        values: findByAuthor
      }
    ];

    return allSearches;
  }
}
export default Helpers;
