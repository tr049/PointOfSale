using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.IProviders
{
    public interface ICategory
    {
        CategoryDTO GetCategoryById(int id);
        IList<CategoryDTO> GetAllCategorys();
        int AddCategory(CategoryDTO dto);
        int DeleteCategory(CategoryDTO dto);
        int UpdateCategory(CategoryDTO dto);

    }
}
