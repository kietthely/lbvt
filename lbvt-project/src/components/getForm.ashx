using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FormFileAccept
{

  public class GetForm : IHttpHandler
  {

    public void ProcessRequest(HttpContext context)
    {
      if (context.Request.HttpMethod == "GET") { // in this app, it won't use here case the request is GET
        context.Response.ContentType = "text/plain";
        context.Response.Write("OK+");
      }
      else if (context.Request.HttpMethod == "POST") { // case for the request is POST
        HttpPostedFile file01 = context.Request.Files["File01"];

        string phyPath = context.Server.MapPath("/"); 
        file01.SaveAs(phyPath + file01.FileName);

        context.Response.ContentType = "text/plain";
        context.Response.Write("OK");     // display message OK on the screen when action is successfuly done
      }
    }

    public bool IsReusable
    {
      get
      {
        return false;
      }
    }
  }
}