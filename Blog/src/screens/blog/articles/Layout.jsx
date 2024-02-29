// import React from 'react';
import MyForm from './Form';
import Articles from './Articles';


function ArticlesContent(){
    return (
        <div className="container my-5">
          <div className="row justify-content-between">
            <div className="col-3 border px-2 py-4">
              <h4 className='text-center'>Фильтрация</h4>
              <MyForm/>
            </div>
            <div className="col-9 border px-2 py-4">
              <h4 className='text-center'>Статьи</h4>
              <Articles/>
            </div>
          </div>
        </div>
    );
  }

export default ArticlesContent;
