package lidpapi;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.hateoas.ResourceSupport;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.text.SimpleDateFormat;
import java.util.Date;

class AppInfo extends ResourceSupport {

    @JsonProperty("name")
    private String name;

    @JsonProperty("date")
    private String date;

    @JsonCreator
    AppInfo(String name) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-dd-MM");
        this.date = dateFormat.format(new Date());
        this.name = name;
    }
}